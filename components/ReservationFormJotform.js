export default function ReservationFormApi() {
  const URL = 'https://form.jotform.com/221484578966069' //embed URL
  const iframeStyle = {
    margin: '0 auto',
    maxWidth: '100%',
    width: '100%',
    height: '500px',
    border: '5px solid purple',
  }

  return (
    //
    <>
      <div className="my-10 w-full">
        <iframe
          title="Mademoiselle Reservation"
          onLoad={console.log('Loading IFRAME')}
          onLoadedData={console.log('Loaded Data...')}
          style={iframeStyle}
          src={URL}
          allowtransparency="true"
        ></iframe>
      </div>
    </>
  )
}
