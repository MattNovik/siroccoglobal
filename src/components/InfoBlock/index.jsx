import './index.scss';

const InfoBlock = ({ data }) => {
  return (
    <div className="info-block">
      <img
        src={'/src/assets/' + data.img + '.jpg'}
        alt="#"
        className="info-block__img"
      />
      <p className="info-block__text">{data.text}</p>
    </div>
  );
};

export default InfoBlock;
