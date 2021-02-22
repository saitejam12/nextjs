import headerStyles from '../styles/Header.module.css';

const Header = () => {
  return (
    <div>
      <h3 className={headerStyles.title}>
        <span>WebDev</span> News
      </h3>
    </div>
  );
};

export default Header;
