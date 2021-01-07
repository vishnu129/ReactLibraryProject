import React from 'react';
import { Input } from 'antd';
import './Demo.css';
import { AudioOutlined } from '@ant-design/icons';

function Demo() {
    const { Search } = Input;

    // const suffix = (
    //     <AudioOutlined
    //      className="audio"
    //     />
    //   );
      
      const onSearch = value => console.log(value);
    return (
        <div>
           
           <Search className="search"
      placeholder="search for the book"
    //   allowClear
      onSearch={onSearch}
    //   style={{ width: 200, margin: '0 10px' }}
    />
        </div>
    )
}

export default Demo
