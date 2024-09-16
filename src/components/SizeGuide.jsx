import { useState } from "react";

const SizeGuide = () => {

    const [selectedTab, setSelectedTab] = useState('details');

  const handleTabChange = (tab) => {
    setSelectedTab(tab);
  };



  return (
    <div className="product-details">
      <div className="tab-buttons">
        <button 
          className={selectedTab === 'details' ? 'active' : ''}
          onClick={() => handleTabChange('details')}
        >
          Product Details
        </button>
        <button 
          className={selectedTab === 'sizeChart' ? 'active' : ''}
          onClick={() => handleTabChange('sizeChart')}
        >
          Size Chart
        </button>
      </div>
      <div className="tab-content">
        {selectedTab === 'details' && (
          <div>
            {/* Render product details */}
            <p>Product Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            {/* Add more product details */}
          </div>
        )}
        {selectedTab === 'sizeChart' && (
          <div>
            {/* Render size chart */}
            <table>
              <thead>
                <tr>
                  <th>Size</th>
                  <th>Chest (inches)</th>
                  <th>Waist (inches)</th>
                  <th>Hips (inches)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>XS</td>
                  <td>34-36</td>
                  <td>28-30</td>
                  <td>34-36</td>
                </tr>
                {/* Add more size chart details */}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default SizeGuide