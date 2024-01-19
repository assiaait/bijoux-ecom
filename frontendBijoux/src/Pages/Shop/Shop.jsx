import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import CategorySlide from './CategorySlide';
import AsideCategories from './AsideCategories';
import CardProduct from './CardProduct';

function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
}
    const breadcrumbs = [
        <Link underline="hover" key="1" color="inherit" href="/" onClick={handleClick}>
          Home
        </Link>,
        <Link
          underline="hover"
          key="2"
          color="inherit"
          href="/material-ui/getting-started/installation/"
          onClick={handleClick}
        >
          Shop
        </Link>,
      ];

function Shop (){
        return(
            <>
                <header>
                    <Breadcrumbs
                        separator={<NavigateNextIcon fontSize="small" />}
                        aria-label="breadcrumb"
                        style={{backgroundColor:'#d6e8da',padding:'10px 40px',color:'#34513F'}}
                    >
                        {breadcrumbs}
                    </Breadcrumbs>
                    <CategorySlide />
                </header>
                <main>
                    <section>
                        <aside>
                            <AsideCategories />
                        </aside>
                        <article>
                            <div className='d-flex justify-content-between mt-3'>
                                <h6 className='mt-2'>Showing 1–12 of 29 item(s)</h6>
                                <div className="dropdown">
                                    <a className="btn dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                                        Default Sorting
                                    </a>

                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                        <li><a className="dropdown-item" href="#">Default Sorting</a></li>
                                        <li><a className="dropdown-item" href="#">Sort By Popularity</a></li>
                                        <li><a className="dropdown-item" href="#">Sort By Average Rating</a></li>
                                        <li><a className="dropdown-item" href="#">Sort By Latest</a></li>
                                        <li><a className="dropdown-item" href="#">Sort By Price: Low To High</a></li>
                                        <li><a className="dropdown-item" href="#">Sort By Price: High To Low</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="row row-cols-3 justify-content-between mt-3 mb-2">
                                <CardProduct className="col" />
                                <CardProduct className="col" />
                                <CardProduct className="col" />
                                <CardProduct className="col" />
                                <CardProduct className="col" />
                                <CardProduct className="col" />
                            </div> 
                        </article>
                    </section>
                </main>
            </>
        )
    }

export default Shop