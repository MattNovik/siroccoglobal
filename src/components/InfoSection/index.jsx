import './index.scss';
import { nanoid } from 'nanoid';
import AdditionalInfoBlock from '../AdditionalInfoBlock';

const InfoSection = ({ data }) => {
  const dataList = data.additionalInfo;

  return (
    <section id="services" className="info-section">
      <h2 className="info-section__kind-of-work">{data.secondBLockName}</h2>
      <ul className="info-section__list">
        {dataList.map((item) => (
          <li className="info-section__item" key={nanoid()}>
            <AdditionalInfoBlock data={item} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default InfoSection;
