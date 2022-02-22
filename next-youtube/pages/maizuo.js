import axios from 'axios';

export default function Maizuo({ films }) {
  console.log('films', films);
  return (
    <div>
      <h2>电影</h2>
      <ul>
        {
          films.map(film => {
            return <li key={film.filmId}>
              {film.name}
              <img src={film.poster}></img>
            </li>
          })
        }
      </ul>
    </div>
  )
}

export const getStaticProps = async () => {
  const res = await axios.get('https://m.maizuo.com/gateway?cityId=440100&pageNum=1&pageSize=10&type=2&k=163378', {
    headers: {
      'X-Host': 'mall.film-ticket.film.list'
    }
  })
  // console.log('res ---', res);

  const films = res.data.data.films
  return {
    props: {
      films,
    }
  }
}