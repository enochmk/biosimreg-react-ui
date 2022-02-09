import notFoundImage from '../../assets/svg/not-found.svg';

export default function NotFound() {
  return (
    <div className="mx-auto">
      <img src={notFoundImage} alt="not Found" className="w-4/10" />
    </div>
  );
}
