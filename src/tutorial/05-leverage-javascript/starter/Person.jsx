import avatar from '../../../assets/default-avatar.svg';
const Person = ({name, nickName = 'ShakeAndBack', images}) => {
    const image = images?.[0].small?.url || avatar;
  return <div>
    <img src={image} alt={name} style={{width: '50px'}} />
    <h4>P{name}</h4>
    <p>Nickname: {nickName}</p>
  </div>;
}

export default Person;