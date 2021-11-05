import { Link } from 'react-router-dom'

const Products = () => {
    return (
        <section>
            <h1>The Products Page</h1>
            <ul>
                <li>
                    <Link to="/products/book">Book</Link>
                </li>
                <li>
                    <Link to="/products/carpet">A Carpet</Link>
                </li>
                <li>
                    <Link to="/products/online-course">An Olnline Course</Link>
                </li>
            </ul>
        </section>

    )
}


export default Products