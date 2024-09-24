// week-2/student-info.js

import React from 'react';
import Link from 'next/link';

const StudentInfo = () => {
  return (
    <div>
      <h1>Yassine Ghannay</h1>
      <p>
        <Link href="https://github.com/yassineghannay" target="_blank" rel="noopener noreferrer">
          https://github.com/yassineghannay
        </Link>
      </p>
    </div>
  );
};

export default StudentInfo;

