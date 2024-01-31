// import React, { useState } from 'react';
// import CollegeList from './CollegeList';
// import AdminNavbar from '../component/AdminNavbar';
// import './Admin.css';
// const Admin = () => {
//   // State to manage the list of colleges
//   const [colleges, setColleges] = useState([
//     { 
//         id: 1, name: 'Avengers based Theme',
//      image: 'https://woogle.co.in/cdn/shop/files/avengers-party-theme-185_1024x1024.webp?v=1683089456',
//       description: 'Transform your birthday celebration into an epic adventure with an Avengers-themed party! Assemble your friends and family to embark on a day filled with superhero excitement. Decorate your space with vibrant colors, action-packed banners, and iconic symbols of Earths mightiest heroes. Imagine the thrill as young partygoers discover a world where Spider-Man swings from the walls, Iron Mans suit gleams in the party lights, and Captain Americas shield stands tall as a centerpiece.' },
//     { 
//         id: 2, name: 'Barbie based theme',
//      image: 'https://d259o9es2o749h.cloudfront.net/wp-content/uploads/2023/06/02084212/YEC_5524-1024x683.jpg', 
//      description: ' Step into a world of enchantment and elegance with a Barbie-themed birthday celebration fit for a princess! Transform your party venue into a dreamy pink paradise adorned with Barbies signature glamor. From shimmering decorations to Barbies iconic silhouette, every detail creates a magical ambiance.' },
     
        
//   ]);

//   // Function to handle college addition
//   const handleAddCollege = () => {
//     const newCollege = {
//       id: Date.now(),
//       name: prompt('Enter new name:'),
//       image: prompt('Enter new image URL:'),
//       description: prompt('Enter new description:'),
//     };

//     setColleges([...colleges, newCollege]);
//   };

//   // Function to handle college deletion
//   const handleDeleteCollege = (id) => {
//     const updatedColleges = colleges.filter((college) => college.id !== id);
//     setColleges(updatedColleges);
//   };

//   // Function to handle college update
//   const handleUpdateCollege = (id, newName, newImage, newDescription) => {
//     const updatedColleges = colleges.map((college) =>
//       college.id === id
//         ? {
//             ...college,
//             name: newName,
//             image: newImage,
//             description: newDescription,
//           }
//         : college
//     );
//     setColleges(updatedColleges);
//   };

//   return (
//     <>
//     <AdminNavbar/>
//     <div style={{ textAlign: 'center' }}>
//       <CollegeList colleges={colleges} isAdmin onDelete={handleDeleteCollege} onUpdate={handleUpdateCollege} />
//       <div style={{ marginTop: '20px' }}>
//         <h2>ADD Theme</h2>
//         <button onClick={handleAddCollege} style={{backgroundColor:'green'}}>Add</button>
//       </div>
//     </div>
//     </>
//   );
// };

// export default Admin;
// Admin.jsx
// Admin.jsx
// Admin.jsx
import React, { useState } from 'react';
import CollegeList from './CollegeList';
// import AdminNavbar from '../component/AdminNavbar';
import '../css/Admin.css';

const Admin = () => {
  // State to manage the list of colleges
  const [colleges, setColleges] = useState([
    {
      id: 1,
      name: 'Birthday Party',
      image: 'https://woogle.co.in/cdn/shop/files/avengers-party-theme-185_1024x1024.webp?v=1683089456',
      description:
        'Transform your birthday celebration into an epic adventure with an Avengers-themed party! Assemble your friends and family to embark on a day filled with superhero excitement. Decorate your space with vibrant colors, action-packed banners, and iconic symbols of Earths mightiest heroes. Imagine the thrill as young partygoers discover a world where Spider-Man swings from the walls, Iron Mans suit gleams in the party lights, and Captain Americas shield stands tall as a centerpiece.',
    },
    {
      id: 2,
      name: 'Farewell Party',
      image: 'data:image/jpeg;base64,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',
      description:
        ' Step into a world of enchantment and elegance with a Farewell Party! ',
    },
  ]);

  // Function to handle college addition
  const handleAddCollege = () => {
    const newCollege = {
      id: Date.now(),
      name: prompt('Enter new name:'),
      image: prompt('Enter new image URL:'),
      description: prompt('Enter new description:'),
    };

    setColleges([...colleges, newCollege]);
  };

  // Function to handle college deletion
  const handleDeleteCollege = (id) => {
    const updatedColleges = colleges.filter((college) => college.id !== id);
    setColleges(updatedColleges);
  };

  // Function to handle college update
  const handleUpdateCollege = (id, newName, newImage, newDescription) => {
    const updatedColleges = colleges.map((college) =>
      college.id === id
        ? {
            ...college,
            name: newName,
            image: newImage,
            description: newDescription,
          }
        : college
    );
    setColleges(updatedColleges);
  };

  return (
    <>
    <div className='create'>
      <div className="card-container">
        {colleges.map((college) => (
          <div key={college.id} className="card">
            <img src={college.image} alt={college.name} />
            <h2>{college.name}</h2>
            <p>{college.description}</p>
            <div className="card-actions">
              <button onClick={() => handleUpdateCollege(college.id, prompt('Enter new name:'), prompt('Enter new image URL:'), prompt('Enter new description:'))}>Edit</button><br></br>
              <button onClick={() => handleDeleteCollege(college.id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
      <div className="add-button">
        
        <button onClick={handleAddCollege}>Add</button>
      </div>
      </div>
    </>
  );
};

export default Admin;