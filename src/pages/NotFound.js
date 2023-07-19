function NotFound() {
  return (
    <main className="main page__404">
      <div className="container">
          <div className="page__404-inner">
            <div className="four_zero_four_bg">
              <h1 className="text-center">404</h1>
            </div>

          <div className="contant_box_404">
            <h3 className="h2">Look like you're lost</h3>

            <p>the page you are looking for not avaible!</p>

            <a href="#" className="link_404 btn" >Go to Home</a>
          </div>
        </div>
      </div>
    </main>
  )
}

export default NotFound;