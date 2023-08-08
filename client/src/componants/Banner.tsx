

function Banner() {
  return (
    // <div className="bg-green-500 mt-5 w-full h-full "  >Banner Body</div>
    <div className="flex items-center justify-center">
    <div
      className='p-5 text-center container bg-image flex justify-center items-center' // Add 'items-center' class to center vertically
      style={{
        backgroundSize: "contain",
        backgroundImage: "url('https://img.freepik.com/free-vector/gdpr-concept-illustration_114360-7177.jpg?w=996&t=st=1691498366~exp=1691498966~hmac=d6c3e7b631e6e6a0b165ef4bf0b52236a6ca8a2329b1006feb0163a6b72e9455)",
        height: '350px',
        backgroundRepeat: 'no-repeat', // Add this line to avoid image repeating
        backgroundPosition: 'center', // Add this line to center the image both horizontally and vertically
      }}
    >
    </div>

    <div>

     
        <h1> Generate Password</h1>

    </div>

  </div>

  )
}

export default Banner