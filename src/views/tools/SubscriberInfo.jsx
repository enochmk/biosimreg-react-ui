import { useState, useEffect } from 'react';
import SubsciberInfoItem from './SubscriberInfoItem';

const SubscriberInfo = ({ data }) => {
  const [open, setOpen] = useState(false);
  const [subscriberInfo, setSubscriberInfo] = useState({
    name: '',
    suuid: '',
    bcap: '',
  });

  useEffect(() => {
    if (data) {
      const dataArray = data?.text?.split('\n');
      setSubscriberInfo({
        name: dataArray[0]?.split(':')[1],
        suuid: dataArray[1]?.split(':')[1],
        bcap: dataArray[2]?.split(':')[1],
      });
      setOpen(true);
    } else {
      setOpen(false);
      setSubscriberInfo({
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
        <h2 className="card-title text-gray-600">
          Subscriber's Registration Status
        </h2>
        <div className="divider"></div>
        <main className="flex flex-col gap-2 w-3/4">
          <SubsciberInfoItem title="Full Name" value={subscriberInfo.name} />
          <SubsciberInfoItem title="Unique Code" value={subscriberInfo.suuid} />
          <SubsciberInfoItem title="BCAP" value={subscriberInfo.bcap} />
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
