export const OrderDetails = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        border: '3px solid purple',
        borderRadius: '10px',
        width: '900px',
        height: '800px',
      }}
    >
      <div
        style={{
          border: '3px solid blue',
          borderRadius: '10px',
          width: '800px',
          height: '700px',
          // display: 'flex',
        }}
      >
        <div
        style={{
          border: '3px solid green',
          borderRadius: '10px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
        >
          <div
            style={{
              border: '3px solid purple',
              width: '100%',
              borderRadius: '10px',
              display: 'flex',
              justifyContent: 'flex-end',
              backgroundColor: 'red',
            }}
          >
            <div
              style={{
                border: '3px solid purple',
                borderRadius: '10px',
                width: '40px',
                height: '40px',
              }}
            ></div>
          </div>
          <div
            style={{
              border: '3px solid purple',
              borderRadius: '10px',
              width: '404px',
              height: '404px',
            }}
          >
            <h1>fxgsgs do Pedido</h1>
          </div>
        </div>
      </div>
    </div>
  );
};
