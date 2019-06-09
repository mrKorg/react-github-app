import React from 'react'

const Header = () => (
  <header className='header'>
    <div className='header__logo'>
      <svg xmlns='http://www.w3.org/2000/svg' width='300px' height='70px' viewBox='0 0 300 70'>
        <title>logo</title>
        <path
          d='M93.8,47.62l-1.23-.16v-.54c.43,0,1-.16,1.5-.16h1.66v.54l-1.07.16,2,7.08,2.14-7.61c.16,0,.43-.16.54-.16l.7.16,2.3,7.88,2.14-7.34-1.07-.16v-.54c.43,0,1-.16,1.61-.16h1.5v.54l-1.23.16-2.47,7.88a7,7,0,0,0-.7.16h-.7l-2.14-7.45-2.14,7.45c-.27,0-.43.16-.7.16l-.7-.16-2-7.72ZM108,52.93V49.39a2.21,2.21,0,0,1,.8-1.88,5.1,5.1,0,0,1,5.15,0,2.28,2.28,0,0,1,.8,1.88v1.88a13.91,13.91,0,0,1-2.84.16h-2.84v1.5a2,2,0,0,0,.54,1.5,3.33,3.33,0,0,0,1.88.43,4.46,4.46,0,0,0,1.5-.16,3.44,3.44,0,0,1,1.07-.27l.27-.16c0,.16.16.27.16.43V55c-.16,0-.16.16-.27.16a3.69,3.69,0,0,1-1,.27,5.47,5.47,0,0,1-1.61.16,4.64,4.64,0,0,1-2.73-.7,2,2,0,0,1-.91-1.93Zm1.07-2h4.61V49.55a2,2,0,0,0-.54-1.5,3.86,3.86,0,0,0-3.54,0c-.43.27-.54.8-.54,1.5Zm8.15-6.65L116,44.09v-.54a4.8,4.8,0,0,1,1.61-.16h.7v4.18a.16.16,0,0,1,.16-.16c.16,0,.16-.16.27-.27a3,3,0,0,1,.43-.27c.16-.16.43-.16.7-.27s.7-.16,1.07-.16a2.76,2.76,0,0,1,2.14.7,2.59,2.59,0,0,1,.7,1.88v3.54a2.19,2.19,0,0,1-2.41,2.57,8.4,8.4,0,0,1-1.61-.27,2.23,2.23,0,0,1-1.07-.54l-.27-.27v1c-.16,0-.43.16-.54.16l-.54.27V44.25Zm5.57,8.68V49.39a2.5,2.5,0,0,0-.43-1.5,2.18,2.18,0,0,0-1.5-.43,3.46,3.46,0,0,0-1.88.43,1.63,1.63,0,0,0-.54,1.34v4.34c0,.16.16.16.27.27s.43.27.8.54a3,3,0,0,0,1.61.27,1.82,1.82,0,0,0,1.34-.43c.32-.21.32-.64.32-1.29Zm13.83,1.88,1.23.16v.54a4.79,4.79,0,0,1-1.61.16l-.7-.16v-1a.85.85,0,0,1-.43.27,3.33,3.33,0,0,1-1,.43,5.61,5.61,0,0,1-1.61.27,2.51,2.51,0,0,1-1.88-.7,2.54,2.54,0,0,1-.54-1.88V49.39a2.51,2.51,0,0,1,.7-1.88,3.11,3.11,0,0,1,2.14-.7,6.7,6.7,0,0,1,1.61.27c.54.11.7.27.8.43l.27.27V44.14L134.43,44s-.16-.16-.16-.27l.16-.27a4.79,4.79,0,0,1,1.61-.16h.7V54.81h-.11Zm-5.57-5.31V53a2.5,2.5,0,0,0,.43,1.5,1.82,1.82,0,0,0,1.34.43,2.38,2.38,0,0,0,1.07-.16,4.72,4.72,0,0,1,.8-.27,1,1,0,0,1,.54-.27.34.34,0,0,0,.27-.27l.16-.16V49.5a1.44,1.44,0,0,0-.54-1.34,3.33,3.33,0,0,0-1.88-.43,2.18,2.18,0,0,0-1.5.43C131.21,48.32,131.05,48.86,131.05,49.5Zm8.25,3.43V49.39a2.21,2.21,0,0,1,.8-1.88,5.1,5.1,0,0,1,5.15,0,2.28,2.28,0,0,1,.8,1.88v1.88a13.91,13.91,0,0,1-2.84.16h-2.79v1.5a2,2,0,0,0,.54,1.5,3.33,3.33,0,0,0,1.88.43,4.46,4.46,0,0,0,1.5-.16,3.44,3.44,0,0,1,1.07-.27l.27-.16c0,.16.16.27.16.43l-.16.43c-.16,0-.16.16-.27.16s-.43.16-1,.27a8.18,8.18,0,0,1-1.61.16,4.64,4.64,0,0,1-2.73-.7,2.43,2.43,0,0,1-.8-2.09Zm1.13-2H145V49.55a2,2,0,0,0-.54-1.5,3.86,3.86,0,0,0-3.54,0c-.43.27-.54.8-.54,1.5v1.34Zm7.83-3.27L147,47.46v-.54c.43,0,.8-.16,1.5-.16h1.66v.54l-1,.16,2.57,7.08,2.57-7.08-1-.16s-.16-.16-.16-.27l.16-.27c.43,0,1-.16,1.77-.16h1.5v.54l-1.23.16-2.84,7.88c-.27,0-.43.16-.7.16l-.7-.16-2.95-7.56Zm9.49,5.31V49.39a2.21,2.21,0,0,1,.8-1.88,5.1,5.1,0,0,1,5.15,0,2.28,2.28,0,0,1,.8,1.88v1.88a13.91,13.91,0,0,1-2.84.16h-2.84v1.5a2,2,0,0,0,.54,1.5,3.33,3.33,0,0,0,1.88.43,4.46,4.46,0,0,0,1.5-.16,3.44,3.44,0,0,1,1.07-.27l.27-.16c0,.16.16.27.16.43l-.16.43c-.16,0-.16.16-.27.16s-.43.16-1,.27a5.47,5.47,0,0,1-1.61.16,4.64,4.64,0,0,1-2.73-.7,2.84,2.84,0,0,1-.75-2.09Zm1.13-2h4.61V49.55a2,2,0,0,0-.54-1.5,2.83,2.83,0,0,0-1.77-.43,3.18,3.18,0,0,0-1.77.43c-.43.27-.54.8-.54,1.5v1.34Zm8.25,3.91V44.25l-1.23-.16v-.54a4.79,4.79,0,0,1,1.61-.16h.7V54.64l1.23.16v.54a5.33,5.33,0,0,1-1.77.16h-1.82V55Zm3.64-1.88V49.39c0-1.77,1.07-2.57,3.38-2.57s3.38.8,3.38,2.57v3.54c0,1.77-1.07,2.57-3.38,2.57C172,55.61,170.77,54.7,170.77,52.93Zm1.07-3.43V53a2,2,0,0,0,.54,1.5,3.18,3.18,0,0,0,1.77.43,2.83,2.83,0,0,0,1.77-.43c.43-.27.54-.8.54-1.5V49.5a1.44,1.44,0,0,0-.54-1.34,3.18,3.18,0,0,0-1.77-.43,2.83,2.83,0,0,0-1.77.43A1.83,1.83,0,0,0,171.84,49.5Zm8.42,8.68V47.62L179,47.46v-.54c.43,0,1-.16,1.61-.16h.7v1a.85.85,0,0,1,.43-.27,3.33,3.33,0,0,1,1-.43,5.61,5.61,0,0,1,1.61-.27,2.51,2.51,0,0,1,1.88.7,2.54,2.54,0,0,1,.54,1.88v3.54a2.51,2.51,0,0,1-.7,1.88,3.11,3.11,0,0,1-2.14.7,6.24,6.24,0,0,1-1.5-.27c-.43-.16-.7-.27-.8-.43l-.27-.27V58l1.23.16v.54a5.33,5.33,0,0,1-1.77.16H179v-.54l1.23-.16Zm5.57-5.25V49.39a2.5,2.5,0,0,0-.43-1.5,1.82,1.82,0,0,0-1.34-.43,6.24,6.24,0,0,0-1.5.27,3.07,3.07,0,0,0-1,.54l-.27.27v4.34a2,2,0,0,0,.54,1.5,3.33,3.33,0,0,0,1.88.43,2.18,2.18,0,0,0,1.5-.43,1.6,1.6,0,0,0,.59-1.45Zm3.81,1.88V47.62l-1.23-.16v-.54c.43,0,1-.16,1.61-.16h.7v1l.27-.27a2.33,2.33,0,0,1,1-.43,4.4,4.4,0,0,1,1.5-.27c1.07,0,1.77.27,2,1a.85.85,0,0,1,.43-.27c.27-.11.54-.27,1-.43a5.61,5.61,0,0,1,1.61-.27,2.5,2.5,0,0,1,1.77.54,2.27,2.27,0,0,1,.54,1.77v5.57l1.23.16v.54a4.33,4.33,0,0,1-1.61.16l-.7-.16V49.12a1.5,1.5,0,0,0-1.66-1.66,4.56,4.56,0,0,0-1.34.27,1.58,1.58,0,0,0-.8.43l-.27.27v6.38l1.23.16v.54a5.33,5.33,0,0,1-1.77.16h-1.66v-.54l1.07-.16V49.39a1.5,1.5,0,0,0-1.66-1.66,4.56,4.56,0,0,0-1.34.27,2.23,2.23,0,0,0-.8.54l-.27.27V55l1.07.16v.54a4.79,4.79,0,0,1-1.61.16h-1.77v-.54l1.5-.54Zm13.67-1.88V49.39a2.21,2.21,0,0,1,.8-1.88,5.1,5.1,0,0,1,5.15,0,2.28,2.28,0,0,1,.8,1.88v1.88a13.91,13.91,0,0,1-2.84.16h-2.84v1.5a2,2,0,0,0,.54,1.5c.38.43,1,.43,1.88.43a4.46,4.46,0,0,0,1.5-.16,3.44,3.44,0,0,1,1.07-.27l.27-.16c0,.16.16.27.16.43l-.16.43c-.16,0-.16.16-.27.16s-.43.16-1,.27a8.18,8.18,0,0,1-1.61.16,4.64,4.64,0,0,1-2.73-.7,2.41,2.41,0,0,1-.75-2.09Zm1.07-2H209V49.55a2,2,0,0,0-.54-1.5,3.86,3.86,0,0,0-3.54,0c-.43.27-.54.8-.54,1.5v1.34ZM213,54.81V47.62l-1.23-.16v-.54c.43,0,1-.16,1.61-.16h.7v1a.85.85,0,0,1,.43-.27,3.33,3.33,0,0,1,1-.43,5.61,5.61,0,0,1,1.61-.27,2.27,2.27,0,0,1,1.88.7,2.54,2.54,0,0,1,.54,1.88v5.31l1.23.16v.54a4.33,4.33,0,0,1-1.61.16l-.7-.16V49.39a2.5,2.5,0,0,0-.43-1.5,1.82,1.82,0,0,0-1.34-.43,6.24,6.24,0,0,0-1.5.27c-.43.16-.7.43-1,.54l-.27.27v6.11l1.23.16v.54a5.33,5.33,0,0,1-1.77.16h-1.82V55l1.45-.16Zm9.59-7.88.16-1.77c.16,0,.27-.16.43-.16l.54.16v1.61h2.57c0,.16.16.27.16.43l-.16.43h-2.57V53.2a1.5,1.5,0,0,0,1.66,1.66,2,2,0,0,0,1-.16c0,.16.16.27.16.43l-.16.27a3.4,3.4,0,0,1-1.23.27,2,2,0,0,1-2.3-2.3V47.68l-1.23-.16V47a3.87,3.87,0,0,1,1-.05Zm15.17,2.57-.16-1.5a5.09,5.09,0,0,0-2.14-.43,3.18,3.18,0,0,0-1.77.43,2.17,2.17,0,0,0-.54,1.5V53a2,2,0,0,0,.54,1.5,3.18,3.18,0,0,0,1.77.43,4.46,4.46,0,0,0,1.5-.16,3.83,3.83,0,0,1,1-.27l.27-.16c0,.16.16.27.16.43l-.16.43c-.16,0-.16.16-.27.16-.16.16-.43.16-1,.27a5.12,5.12,0,0,1-1.61.16,4,4,0,0,1-2.57-.7,2.28,2.28,0,0,1-.8-1.88V49.71a2.21,2.21,0,0,1,.8-1.88,4,4,0,0,1,2.57-.7,5.47,5.47,0,0,1,1.61.16,4.37,4.37,0,0,1,1.07.43l.27.16v1.93H238l-.27-.32Zm2.73,3.43V49.39c0-1.77,1.07-2.57,3.38-2.57s3.38.8,3.38,2.57v3.54c0,1.77-1.07,2.57-3.38,2.57S240.45,54.7,240.45,52.93Zm1.07-3.43V53a2,2,0,0,0,.54,1.5,3.18,3.18,0,0,0,1.77.43,2.83,2.83,0,0,0,1.77-.43c.43-.27.54-.8.54-1.5V49.5a1.44,1.44,0,0,0-.54-1.34,3.18,3.18,0,0,0-1.77-.43,2.83,2.83,0,0,0-1.77.43C241.68,48.32,241.52,48.86,241.52,49.5Zm8.42,5.31V47.62l-1.23-.16v-.54c.43,0,1-.16,1.61-.16h.7v1l.27-.27a2.33,2.33,0,0,1,1-.43,4.4,4.4,0,0,1,1.5-.27c1.07,0,1.77.27,2,1a.85.85,0,0,1,.43-.27,5.32,5.32,0,0,1,2.57-.7,2.5,2.5,0,0,1,1.77.54,2.27,2.27,0,0,1,.54,1.77v5.57l1.23.16v.54a4.33,4.33,0,0,1-1.61.16l-.7-.16V49.12a1.5,1.5,0,0,0-1.66-1.66,4.56,4.56,0,0,0-1.34.27c-.43.16-.7.27-.8.43l-.27.27v6.38l1.23.16v.54a5.33,5.33,0,0,1-1.77.16h-1.66v-.54l1.07-.16V49.39a1.5,1.5,0,0,0-1.66-1.66,4.56,4.56,0,0,0-1.34.27,2.23,2.23,0,0,0-.8.54l-.27.27V55l1.07.16v.54a4.79,4.79,0,0,1-1.61.16h-1.82v-.54l1.55-.54Zm14.26,3.38V47.62L263,47.46v-.54c.43,0,1-.16,1.61-.16h.7v1a.85.85,0,0,1,.43-.27,3.33,3.33,0,0,1,1-.43,5.61,5.61,0,0,1,1.61-.27,2.51,2.51,0,0,1,1.88.7,2.54,2.54,0,0,1,.54,1.88v3.54a2.51,2.51,0,0,1-.7,1.88,3.11,3.11,0,0,1-2.14.7,6.24,6.24,0,0,1-1.5-.27,1.37,1.37,0,0,1-.8-.43l-.27-.27V58l1.23.16v.54a5.33,5.33,0,0,1-1.77.16h-1.82v-.54Zm5.41-5.25V49.39a2.5,2.5,0,0,0-.43-1.5,1.82,1.82,0,0,0-1.34-.43,6.24,6.24,0,0,0-1.5.27,4.74,4.74,0,0,0-1,.54l-.27.27v4.34a2,2,0,0,0,.54,1.5,3.33,3.33,0,0,0,1.88.43,2.18,2.18,0,0,0,1.5-.43A1.6,1.6,0,0,0,269.61,52.93Zm4.45-4.88-.16,1.5h-.54a7,7,0,0,1-.16-1.88c.16,0,.16-.16.27-.27a2.66,2.66,0,0,1,1-.27A5.47,5.47,0,0,1,276,47a3.76,3.76,0,0,1,2.47.7,2.65,2.65,0,0,1,.8,1.88V55l1.23.16v.54a4.79,4.79,0,0,1-1.61.16l-.7-.16v-1a.85.85,0,0,1-.43.27,3.05,3.05,0,0,1-1.07.43,5.84,5.84,0,0,1-1.77.27,2.5,2.5,0,0,1-1.77-.54,2.11,2.11,0,0,1-.54-1.61v-.27a2.06,2.06,0,0,1,.7-1.61,4.87,4.87,0,0,1,2.3-.7l2.3-.27V49.61a1.44,1.44,0,0,0-.54-1.34,2.31,2.31,0,0,0-1.61-.43A2.37,2.37,0,0,0,274.06,48.05Zm4.23,3.22-2.14.27a4.68,4.68,0,0,0-1.61.54,1.59,1.59,0,0,0-.43,1.07v.27c0,.54.16,1,.43,1.07a1.71,1.71,0,0,0,1.23.43,2.38,2.38,0,0,0,1.07-.16c.43-.16.54-.16.8-.27a1,1,0,0,1,.54-.27c.16-.16.27-.16.27-.27l.16-.16V51.21h-.32Zm4.61,3.54V47.62l-1.23-.16v-.54c.43,0,1-.16,1.61-.16h.7v1a.85.85,0,0,1,.43-.27,3.33,3.33,0,0,1,1-.43,5.61,5.61,0,0,1,1.61-.27,2.27,2.27,0,0,1,1.88.7,2.54,2.54,0,0,1,.54,1.88v5.31l1.23.16v.54a4.33,4.33,0,0,1-1.61.16l-.7-.16V49.39a2.5,2.5,0,0,0-.43-1.5,1.82,1.82,0,0,0-1.34-.43,6.24,6.24,0,0,0-1.5.27c-.43.11-.7.43-1,.54l-.27.27v6.11l1.23.16v.54a5.33,5.33,0,0,1-1.77.16h-1.82V55Zm8.63-7.18-1.23-.16v-.54c.43,0,.8-.16,1.5-.16h1.66v.54l-1,.16,2.57,7.08,2.57-7.08-1-.16v-.54c.43,0,1-.16,1.77-.16h1.5v.54l-1.23.16-3.38,9.22a3.82,3.82,0,0,1-1.07,1.61,2.42,2.42,0,0,1-1.77.54h-1c0-.16-.16-.27-.16-.43l.16-.43c.27,0,.54.16,1,.16a2.06,2.06,0,0,0,1.88-1.5l.54-1.34h-.27l-3.11-7.5ZM93.26,35.29V20.93l-3-.54c0-.27-.16-.54-.16-1l.16-1A26.21,26.21,0,0,1,95.57,18l3.11.27v2.47c0-.16.16-.16.27-.27a5.74,5.74,0,0,0,.8-.7c.43-.27,1-.54,1.34-.8a14.2,14.2,0,0,1,1.88-.7,12.41,12.41,0,0,1,2.47-.27,4.4,4.4,0,0,1,.27,1.5v.8c0,.27-.16.43-.16.54l-.16.16a7.84,7.84,0,0,0-2.57.43,4.39,4.39,0,0,0-1.88,1c-.54.43-1,.8-1.34,1.07a3.54,3.54,0,0,0-.8,1l-.27.43V35.35l3,.54a1.71,1.71,0,0,1,.27,1l-.16,1a30.58,30.58,0,0,1-5.68.43,18.13,18.13,0,0,1-3-.16c-1,0-1.61-.16-2-.16l-.7-.16a1.74,1.74,0,0,1-.16-1l.16-1,3.06-.54Zm15.17-3.64V24.57a6.23,6.23,0,0,1,2.14-5c1.34-1.07,3.81-1.61,7.08-1.61s5.68.54,6.91,1.61,1.88,2.73,1.88,5v4.61a36.5,36.5,0,0,1-6.22.43h-6.38v2a3.58,3.58,0,0,0,1.07,2.84,6,6,0,0,0,3.64.8c1.23,0,2.47-.16,3.64-.27a12.57,12.57,0,0,0,2.57-.7l.8-.27a3.76,3.76,0,0,1,.27,1.5,1.45,1.45,0,0,1-.16.8c0,.27-.16.43-.16.54v.16a17.46,17.46,0,0,1-7.08,1.23q-5.47,0-7.72-1.61a6,6,0,0,1-2.3-5Zm5.41-4.88h7.45V24.63a4,4,0,0,0-.8-2.84,5.42,5.42,0,0,0-5.68,0,4,4,0,0,0-.8,2.84v2.14Zm33.23-7.18C145.58,18.52,143.27,18,140,18s-5.57.54-7.08,1.61-2.14,2.73-2.14,5V31.7a6.23,6.23,0,0,0,2.14,5,11,11,0,0,0,5.15,1.61c.16.43.16.7.27,1,.16.54.43,1,.54,1.34s.27.7.43.8l.16.27c.16,0,.27.16.43.16h.32a.49.49,0,0,0,.43-.16l.16-.27a2.7,2.7,0,0,0,.43-.8,7.76,7.76,0,0,0,.54-1.34,3.51,3.51,0,0,0,.27-1,9.43,9.43,0,0,0,5.15-1.61c1.5-1.07,2.14-2.73,2.14-5V24.63a6.49,6.49,0,0,0-2.25-5Zm-3.27,12.06a4,4,0,0,1-.8,2.84,4,4,0,0,1-.7.43v-.43l-1.77-.16h-1.07l-1.77.16v.43a4,4,0,0,1-.7-.43,4,4,0,0,1-.8-2.84V24.57a4,4,0,0,1,.8-2.84,4.2,4.2,0,0,1,3-.8,4.77,4.77,0,0,1,3,.8,4,4,0,0,1,.8,2.84v7.08Zm10.72-10.72-3-.54a1.74,1.74,0,0,1-.16-1l.16-1a26.21,26.21,0,0,1,5.31-.43l3.11.27V31.6a4.67,4.67,0,0,0,.7,2.84,3,3,0,0,0,2.47.8,6.77,6.77,0,0,0,2.47-.43,4.52,4.52,0,0,0,1.5-1l.43-.54V20.72l-3-.54a1.71,1.71,0,0,1-.27-1l.27-1a26.21,26.21,0,0,1,5.31-.43l3.11.27V35l3,.54a1.71,1.71,0,0,1,.27,1l-.27,1a26.21,26.21,0,0,1-5.31.43l-3.11-.27V36a1.91,1.91,0,0,1-.8.54,5.87,5.87,0,0,1-2.14.8,8.77,8.77,0,0,1-3.38.54,6.94,6.94,0,0,1-5-1.61c-1.07-1.07-1.5-2.73-1.5-5-.11.11-.11-10.34-.11-10.34Zm23.32,10.72V24.57a6.23,6.23,0,0,1,2.14-5c1.34-1.07,3.81-1.61,7.08-1.61s5.68.54,6.91,1.61,1.88,2.73,1.88,5v4.61a36.5,36.5,0,0,1-6.22.43h-6.38v2a3.58,3.58,0,0,0,1.07,2.84,6.09,6.09,0,0,0,3.64.8c1.23,0,2.47-.16,3.64-.27a12.57,12.57,0,0,0,2.57-.7l.8-.27a3.76,3.76,0,0,1,.27,1.5,1.45,1.45,0,0,1-.16.8c0,.27-.16.43-.16.54v.16a17.46,17.46,0,0,1-7.08,1.23q-5.47,0-7.72-1.61a6,6,0,0,1-2.3-5Zm5.41-4.88h7.45V24.63a4,4,0,0,0-.8-2.84,5.42,5.42,0,0,0-5.68,0,4,4,0,0,0-.8,2.84l-.16,2.14Zm20.85,7.83a7.34,7.34,0,0,0,3.64.8,3.79,3.79,0,0,0,2.57-.7,2.41,2.41,0,0,0,.8-2v-.8c0-.54-.43-1-1.07-1.34a26,26,0,0,0-2.73-1l-3.27-.8a6.6,6.6,0,0,1-2.84-1.5,3.43,3.43,0,0,1-1.07-2.84v-.8a4.73,4.73,0,0,1,2-4.18c1.34-1,3.54-1.34,6.49-1.34a17.61,17.61,0,0,1,3.81.43,14.55,14.55,0,0,1,2.73.8l.8.43a13,13,0,0,1-.16,2.57,8.94,8.94,0,0,0-.16,1.77l-.16.54a4.79,4.79,0,0,1-1.61.16l-1.5-.16-.7-3a6.4,6.4,0,0,0-3.11-.8,3.47,3.47,0,0,0-2.47.7,2.37,2.37,0,0,0-.7,2v.8c0,.54.43,1,1.23,1.23s1.77.54,2.84,1a27.87,27.87,0,0,1,3.27,1,6,6,0,0,1,2.84,1.61A3.94,3.94,0,0,1,216.87,32v.8a4.73,4.73,0,0,1-2,4.18c-1.34,1-3.64,1.34-6.75,1.34a19,19,0,0,1-4.07-.43,12.8,12.8,0,0,1-2.84-.8l-1-.43a13,13,0,0,1,.16-2.57,9.29,9.29,0,0,0,.16-1.88l.16-.54a4.46,4.46,0,0,1,1.5-.16l1.5.16.43,2.95Zm16.13-16.4,6.65-.16h5.31a4.4,4.4,0,0,1,.27,1.5v.8c0,.27-.16.43-.16.54V21H227v11.1a4.09,4.09,0,0,0,.7,2.47,2.84,2.84,0,0,0,2.3.7,9.71,9.71,0,0,0,2.3-.43,3.51,3.51,0,0,1,.27,1.34l-.27,1.34a12.61,12.61,0,0,1-4.18.7c-2.3,0-3.91-.54-4.88-1.5a6.61,6.61,0,0,1-1.5-4.61V21l-3-.54a1.74,1.74,0,0,1-.16-1l.16-1c.16-.38.16-.38,1.5-.38Zm17.47,2.73-3-.54a1.74,1.74,0,0,1-.16-1l.16-1A26.21,26.21,0,0,1,240,18l3.11.27V31.6a4.67,4.67,0,0,0,.7,2.84,3,3,0,0,0,2.47.8,6.77,6.77,0,0,0,2.47-.43,4.52,4.52,0,0,0,1.5-1l.43-.54V20.72l-3-.54a1.71,1.71,0,0,1-.27-1l.27-1a26.21,26.21,0,0,1,5.31-.43l3.11.27V35l3,.54a1.71,1.71,0,0,1,.27,1l-.27,1a26.21,26.21,0,0,1-5.31.43l-3.11-.27V36a1.91,1.91,0,0,1-.8.54,5.87,5.87,0,0,1-2.14.8,8.77,8.77,0,0,1-3.38.54,6.94,6.94,0,0,1-5-1.61c-1.07-1.07-1.5-2.73-1.5-5V20.93Zm25.89,14.36V20.93l-3-.54a1.74,1.74,0,0,1-.16-1l.16-1a26.21,26.21,0,0,1,5.31-.43l3.11.27v1.61a2.4,2.4,0,0,1,.7-.54,5.12,5.12,0,0,1,2-.8,7.93,7.93,0,0,1,3.11-.54c2.57,0,4.18.7,5.15,2a2.28,2.28,0,0,1,1-.54,8.61,8.61,0,0,1,2.47-.8,11.28,11.28,0,0,1,3.81-.54c2.3,0,3.91.54,4.88,1.61a7.06,7.06,0,0,1,1.5,4.77v11l3,.54a1.74,1.74,0,0,1,.16,1l-.16,1a26.21,26.21,0,0,1-5.31.43l-3.11-.27V24.63a4.64,4.64,0,0,0-.7-2.73,2.86,2.86,0,0,0-2.3-.8,5,5,0,0,0-3.91,1.61V35.56l3,.54a1.74,1.74,0,0,1,.16,1l-.16,1a30.58,30.58,0,0,1-5.68.43A13,13,0,0,1,276,38.3c-.8,0-1.34-.16-1.77-.16l-.54-.16a1.71,1.71,0,0,1-.27-1l.27-1,2-.27V24.52a4.64,4.64,0,0,0-.7-2.73,2.69,2.69,0,0,0-2.3-.8,5.46,5.46,0,0,0-2.14.43,3.59,3.59,0,0,0-1.34,1l-.43.54V35.78l2,.27a1.71,1.71,0,0,1,.27,1l-.27,1a21.25,21.25,0,0,1-4.77.43,18.13,18.13,0,0,1-3-.16c-1,0-1.61-.16-2-.16l-.54-.16a1.74,1.74,0,0,1-.16-1l.16-1,3.06-.7ZM34.95,70A34.81,34.81,0,1,1,62.82,56.2l-3.27-2.47A31,31,0,0,0,34.84,4.1,30.93,30.93,0,0,0,35,66v4Z'
          fill='currentColor' />
        <path
          d='M56.49,34V29.08A10.87,10.87,0,0,0,45.67,18.25H13.83l15.7,13.4,2.73-3.11-7.34-6.38h21a6.69,6.69,0,0,1,6.75,6.75v4.88a6.69,6.69,0,0,1-6.75,6.75l-6.11-5-2.57,3.11,2.14,1.77H17.31v8.79h4.07V44.41H44.17L52,50.79l2.57-3.11-4.88-3.91A10.36,10.36,0,0,0,56.49,34Z'
          fill='#fff3c9' />
      </svg>
    </div>
    <h1 className='header__title'>
      Github users search app
    </h1>
  </header>
)

export default Header
