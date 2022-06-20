import { useState, useEffect } from 'react';
import SubsciberInfoItem from './SubscriberInfoItem';

const SubscriberInfo = ({ data, msisdn, ...rest }) => {
  const [open, setOpen] = useState(false);
  const [info, setInfo] = useState({
    msisdn: '',
    name: '',
    suuid: '',
    bcap: '',
  });

  useEffect(() => {
    if (data) {
      setInfo({
        name: data.name,
        msisdn: data?.msisdn,
        suuid: data?.suuid || '-',
        bcap: data.bcap,
      });

      setOpen(true);
    } else {
      setOpen(false);
      setInfo({
        msisdn: '',
        name: '',
        suuid: '',
        bcap: '',
      });
    }
  }, [data]);

  const handleClose = () => {
    setOpen(false);
  };

  if (!data) return null;

  return (
    <div className={open ? 'modal modal-open' : 'modal'}>
      <div className="modal-box">
        <h2 className="card-title text-gray-600">Registration Status: {info.msisdn}</h2>
        <div className="divider"></div>
        <main className="flex flex-col gap-2 w-3/4">
          <SubsciberInfoItem title="Full Name" value={info.name} />
          <SubsciberInfoItem title="SUUID" value={info.suuid} />
          <SubsciberInfoItem title="BCAP" value={info.bcap ? 'YES' : 'NO'} />
        </main>
        <div className="modal-action">
          <button className="btn" onClick={handleClose}>
            Close!
          </button>
        </div>
      </div>
    </div>
  );
};

export default SubscriberInfo;
