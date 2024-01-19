import All from '../../img/all 1.png';
import Bracelet from '../../img/bracelet 1.png';
import Earring from '../../img/Earrings1 1.png';
import Charms from '../../img/charms 1.png';
import Mariage from '../../img/mariage1.png';
import Necklage from '../../img/Necklage 1.png';
import Ring from '../../img/Ring1.png';
import Men from '../../img/Men.png';

function CategorySlide () {
        return(
            <>
                <div className='CategorySlide'>
                    <div id="carouselExampleControlsNoTouching" className="carousel slide " data-bs-touch="false" data-bs-interval="false">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div className="d-flex justify-content-center">
                                    <div className='cardCategorySlide'>
                                        <img src={All} alt="..." />
                                        <h6>All</h6>
                                    </div>
                                    <div className='cardCategorySlide '>
                                        <img src={Bracelet} alt="..." />
                                        <h6>Bracelet</h6>
                                    </div>
                                    <div className='cardCategorySlide '>
                                        <img src={Earring} alt="..." />
                                        <h6>Earring</h6>
                                    </div>
                                    <div className='cardCategorySlide '>
                                        <img src={Charms} alt="..." />
                                        <h6>Charms</h6>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="d-flex justify-content-center">
                                    <div className='cardCategorySlide'>
                                        <img src={Mariage} alt="..." />
                                        <h6>Wedding & Bridal</h6>
                                    </div>
                                    <div className='cardCategorySlide'>
                                        <img src={Necklage} alt="..." />
                                        <h6>Necklage</h6>
                                    </div>
                                    <div className='cardCategorySlide'>
                                        <img src={Ring} alt="..." />
                                        <h6>Ring</h6>
                                    </div>
                                    <div className='cardCategorySlide'>
                                        <img src={Men} alt="..." />
                                        <h6>Men</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                        </div>
                </div>
            </>
        )
    }
export default CategorySlide