import './App.css';
// import PaintingList from './components/PaintingList';
// import paintings from './paintings.json';
// import Section from './components/Section';

import user from './components/social-profile/user.json';
import Profile from './components/social-profile/Profile';

import statData from './components/statistics/statistical-data.json';
import Statistics from './components/statistics/Statistics';

export default function App() {
  return (
    <div>
      <Profile
        // key={user.tag}
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={statData} />

      {/* <Section>
        <PaintingList items={paintings} />
      </Section> */}
    </div>
  );
}

// <div>
//   <Painting
//     imageUrl={paintings[0].url}
//     title={paintings[0].title}
//     authorName={paintings[0].author.tag}
//     profileUrl={paintings[0].author.url}
//     price={paintings[0].price}
//     quantity={paintings[0].quantity}
//   />
//   <Painting
//     imageUrl={paintings[1].url}
//     title={paintings[1].title}
//     authorName={paintings[1].author.tag}
//     profileUrl={paintings[1].author.url}
//     price={paintings[1].price}
//     quantity={paintings[1].quantity}
//   />
//   <Painting
//     imageUrl={paintings[2].url}
//     title={paintings[2].title}
//     authorName={paintings[2].author.tag}
//     profileUrl={paintings[2].author.url}
//     price={paintings[2].price}
//     quantity={paintings[2].quantity}
//   />
// </div>
