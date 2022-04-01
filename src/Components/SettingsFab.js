import React from 'react';

const SettingsFab = ({ setItemNumbers, setIsShowing }) => {

    console.log(setItemNumbers)
    const clickToggle = e => {
        if(e.target.firstChild){
            e.target.firstChild.classList.toggle('toggle-button-right');
        } else{
            e.target.classList.toggle('toggle-button-right');

        }
        document.body.classList.toggle('dark-mode')
    }


    return (
      <>
        <div>
          <h1 id="title-setting">Settings</h1>
        </div>
        <div id="container-theme">
          <h2 id="title-theme">Theme</h2>
          <div className="container-theme-setting">
            <h3 id="light-theme">Light</h3>
            <div className="toggle-container" onClick={(e) => clickToggle(e)}>
              <div className="toggle-button"></div>
            </div>
            <h3 className="dark-theme">Dark</h3>
          </div>
        </div>

        <div className="container-setting-wrapper">
            <h2 className="title-setting-wrapper">
              Items per page
            </h2>
          <select
            id="setting-select"
            defaultValue={8}
            onChange={(e) => setItemNumbers(e.target.value)}
          >
            <option value={4}>4</option>
            <option value={8}>8</option>
            <option value={12}>12</option>
            <option value={16}>16</option>
            <option value={20}>20</option>
          </select>
        </div>
      </>
    );
};

export default SettingsFab;