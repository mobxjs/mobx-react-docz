import React from 'react'
export default ({ children }) => (
  <div>
    <div
      style={{
        position: 'fixed',
        zIndex: 10000,
        bottom: '5px',
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
      }}
    >
      <h2
        style={{
          background: 'orange',
          padding: '5px',
          marginLeft: '5%',
          marginRight: '5%',
        }}
      >
        This site is DEPRECATED. Use the content at your own risk. All
        recommended patterns about integrating MobX with React were moved to{' '}
        <a href="https://mobx.js.org/react-integration.html">
          official documentation.
        </a>
      </h2>
    </div>
    {children}
  </div>
)
