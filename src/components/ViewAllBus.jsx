import React from 'react'
import BusNavbar from './BusNavbar'

const ViewAllBus = () => {
    return (
        <div>
            <BusNavbar/>
            <br />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <ul class="list-group list-group-horizontal">
                                    <li class="list-group-item">KSRTC2020S25</li>
                                    <li class="list-group-item">KL-01-K-206</li>
                                    <li class="list-group-item">Thrissur-Malappuran</li>
                                    <li class="list-group-item">Saji TK</li>
                                    <li class="list-group-item">8506592099</li>
                                </ul>
                                <br />
                                <ul class="list-group list-group-horizontal-sm">
                                    <li class="list-group-item">KSRTC2021B85</li>
                                    <li class="list-group-item">KL-01-K-1025</li>
                                    <li class="list-group-item">Thiruvananthapuram-Kozhikode</li>
                                    <li class="list-group-item">Rajeev Manoj</li>
                                    <li class="list-group-item">9854263125</li>
                                </ul>
                                <br />
                                <ul class="list-group list-group-horizontal-md">
                                    <li class="list-group-item">KSRTC2018Z62</li>
                                    <li class="list-group-item">KL-01-K-56</li>
                                    <li class="list-group-item">Ernakulam-Munnar</li>
                                    <li class="list-group-item">Akhilesh V</li>
                                    <li class="list-group-item">9747002602</li>
                                </ul>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ViewAllBus