import React from 'react'
import BusNavbar from './BusNavbar'

const ViewAllBus = () => {
    return (
        <div>
            <BusNavbar />
            <br />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                                <div class="card">
                                    <div class="card-body">
                                        <h5 class="card-title">KL-01-K-206</h5>
                                        <h6 class="card-subtitle mb-2 text-body-secondary">Thrissur-Malappuram</h6>
                                        <p class="card-text"></p>
                                    </div>
                                    <ul class="list-group list-group-flush">
                                        <li class="list-group-item">KSRTC2020S25</li>
                                        <li class="list-group-item">Saji TK, 8506592099</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                                <div class="card">
                                    <div class="card-body">
                                        <h5 class="card-title">KL-01-K-1025</h5>
                                        <h6 class="card-subtitle mb-2 text-body-secondary">Ernakulam-Munnar</h6>

                                    </div>
                                    <ul class="list-group list-group-flush">
                                        <li class="list-group-item">KSRTC2021B85</li>
                                        <li class="list-group-item">Akhilesh V, 9747002602</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                                <div class="card">
                                    <div class="card-body">
                                        <h5 class="card-title">KL-01-K-56</h5>
                                        <h6 class="card-subtitle mb-2 text-body-secondary">Thiruvananthapuram-Kozhikode</h6>

                                    </div>
                                    <ul class="list-group list-group-flush">
                                        <li class="list-group-item">KSRTC2018Z62</li>
                                        <li class="list-group-item">Rajeev Manoj, 9854263125</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewAllBus