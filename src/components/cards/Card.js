function Card() {
    return (


        // <div className="container">
        <div className="row">
            <div className="col mt-4 ">
                <div className="card mb-3">
                    <div className="row g-0">
                        <div className="col-md-6">
                            <img src="https://picsum.photos/id/1/200/300" class="img-fluid rounded-start  " alt="..." />
                            
                        </div>
                        <div className="col-md-6">
                            <div className="card-body">
                                <h5 className="card-title text-danger ">Card title</h5>
                                <p> <small className="text-muted pt-1">Last updated 3 mins ago</small></p>

                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p className="card-text">

                                    <p className="text-primary">Continue reading...</p>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-6 mt-4">
                <div className="card mb-3" >
                    <div className="row g-0">
                        <div className="col-md-6">
                            <img src="https://picsum.photos/id/1/200/300" class="img-fluid rounded-start " alt="..." />
                        </div>
                        <div className="col-md-6">
                            <div className="card-body">
                                <h5 className="card-title text-danger">Card title</h5>
                                <p> <small class="text-muted">Last updated 3 mins ago</small></p>

                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>

                                <p className=" text-primary">Continue reading...</p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        // </div>
    )
}
export default Card;