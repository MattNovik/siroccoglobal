import './index.scss';

const AdditionalInfoBlock = ({ data }) => {
  return (
    <div className="additional-info-block">
      {/*                 <picture>
            <source
              type="image/webp"
              srcSet={`${Slide2webp} 1x, ${Slide22xebp} 2x`}
            />
            <img
              src={Slide2}
              srcSet={`${Slide2} 1x, ${Slide22x} 2x`}
              width="1280"
              height="480"
              alt="slide1"
            />
          </picture> */}
      <img
        src={'/src/assets/' + data.img + '.jpg'}
        alt=""
        className="additional-info-block__img"
      />
      <p className="additional-info-block__text">{data.text}</p>
    </div>
  );
};

export default AdditionalInfoBlock;
