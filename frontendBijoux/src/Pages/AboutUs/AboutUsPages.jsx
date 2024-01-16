
import Breadcrumbs from '@mui/material/Breadcrumbs'
import Link from '@mui/material/Link'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'
import CEO from '../../img/CEO.jpg'
function handleClick(event) {
  event.preventDefault()
  console.info('You clicked a breadcrumb.')
}
const breadcrumbs = [
  <Link
    underline='hover'
    key='1'
    color='inherit'
    href='/'
    onClick={handleClick}
  >
    Home
  </Link>,
  <Link
    underline='hover'
    key='2'
    color='inherit'
    href='/material-ui/getting-started/installation/'
    onClick={handleClick}
  >
    Our Story
  </Link>,
]

function AboutUs() {
  return (
    <>
      <header>
        <Breadcrumbs
          separator={<NavigateNextIcon fontSize='small' />}
          aria-label='breadcrumb'
          style={{
            backgroundColor: '#d6e8da',
            padding: '10px 40px',
            color: '#34513F',
          }}
        >
          {breadcrumbs}
        </Breadcrumbs>
      </header>
      <main>
        <section className='d-flex row' style={{ marginTop: '30px' }}>
          <div style={{}}>
            <h1
              style={{
                textAlign: 'center',
                paddingRight: '5vw',
                fontSize: '34px',
                fontWeight: '400',
                lineHeight: '40px',
                letterSpacing: '0.04em',
              }}
            >
              About US
            </h1>
            <br
              style={{
                borderStyle: 'solid',
                color: 'gray',
                borderWdth: ' 5px',
              }}
            />
            <div
              style={{
                boxShadow:
                  '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
                width: '70vw',
                textAlign: 'center',
                margin: 'auto',
                marginBottom: '30px',
              }}
            >
              <div
                className='d-flex row justify-content-center mb-5'
                style={{
                  margin: 'auto',
                  textAlign: 'center',
                  padding: '5vw',
                  lineHeight: '40px',
                  letterSpacing: '0.04em',
                  marginTop: '20px',
                  width: '70vw',
                  backgroundColor: '#d6e8da',
                }}
              >
                <h3
                  style={{
                    fontSize: '24px',
                    fontWeight: '400',
                  }}
                >
                  Our mission
                </h3>
                <p style={{ width: '60vw' }}>
                  Turpis duis nisl iaculis tincidunt fames feugiat consequat,
                  sed blandit. Donec tempor ut suspendisse amet. Vulputate
                  consequat pharetra sollicitudin pellentesque tristique. Nisi,
                  viverra volutpat tellus nisi, mauris magna quis tristique
                  lobortis. Pharetra porta cursus facilisis non dui sed sit.
                  Rutrum dolor varius adipiscing quam nisl etiam. Tempus tempor
                  egestas vitae molestie pulvinar integer posuere id lobortis.
                </p>
              </div>
              <div className='d-flex flex-direction-row justify-content-center'>
                <div
                  style={{
                    width: '30vw',
                    textAlign: 'center',
                    padding: '30px',
                    marginRight: '5vw',
                    marginLeft: '5vw',
                  }}
                >
                  <h4>Hello From CEO</h4>
                  <p
                    style={{
                      marginTop: '10px',
                      letterSpacing: '1px',
                      lineHeight: '1.875',
                      color: '#6a6a6a',
                      marginLeft: '10px',
                    }}
                  >
                    Turpis duis nisl iaculis tincidunt fames feugiat consequat,
                    sed blandit. Donec tempor ut suspendisse amet. Vulputate
                    consequat pharetra sollicitudin pellentesque tristique.
                    Nisi, viverra volutpat tellus nisi, mauris magna quis
                    tristique lobortis. Pharetra porta cursus facilisis non dui
                    sed sit. Rutrum dolor varius adipiscing quam nisl etiam.
                    Tempus tempor egestas vitae molestie pulvinar integer
                    posuere id lobortis.
                  </p>
                  <b style={{ color: '#6a6a6a', marginLeft: '10px' }}>
                    Ait Lamalem Assia
                  </b>
                </div>
                <img
                  src={CEO}
                  alt='ceo'
                  style={{
                    width: '30vw',
                    height: '45vw',
                    marginTop: '-15vh',
                    marginBottom: '0',
                  }}
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
export default AboutUs
