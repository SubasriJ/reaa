import React from 'react';
import TabletCard from './TabletCard';

const tablets = [
  { id: 1, name: 'Tablet A', price: '$299', description: 'A great tablet' },
  { id: 2, name: 'Tablet B', price: '$399', description: 'An even better tablet' },
  { id: 3, name: 'Tablet C', price: '$499', description: 'The best tablet' },
];

const TabletList = () => {
  return (
    <div className="tablet-list">
      {tablets.map(tablet => (
        <TabletCard key={tablet.id} tablet={tablet} />
      ))}
    </div>
  );
};

export default TabletList;
