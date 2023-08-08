'use client';
import Navigator from './navigator';

const navigators = [
  {
    title: 'Home',
    iconPath: '/icons/home.svg',
    page: '/',
  },
  {
    title: 'Models',
    iconPath: '/icons/model.svg',
    page: '/',
  },
  {
    title: 'Images',
    iconPath: '/icons/image.svg',
    page: '/',
  },
  {
    title: 'Posts',
    iconPath: '/icons/posts.svg',
    page: '/',
  },
  {
    title: 'Articles',
    iconPath: '/icons/article.svg',
    page: '/',
  },
];
function HomeNavigator() {
  return (
    <div className="flex">
      {navigators.map((item, index) => (
        <Navigator key={index} title={item.title} iconPath={item.iconPath} page={item.page} />
      ))}
    </div>
  );
}
export default HomeNavigator;
