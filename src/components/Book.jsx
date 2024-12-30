import Container from "react-bootstrap/Container";
import {Button, Card} from "react-bootstrap";
import {useState} from "react";
import PropTypes from "prop-types";
import {useNavigate} from "react-router-dom";
import '../styles/Book.css';

const Book = ({ imageSent, titleSent, shortDescription }) => {
    const [image] = useState(imageSent);
    const [title] = useState(titleSent);
    const [text] = useState(shortDescription);
    const navigate = useNavigate()

    return (

        <Container>
            <Card border="warning" className="book">
                <Card.Img variant="top"  className="book__image" src={image} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {text}
                    </Card.Text>
                    <Button variant="primary"  className="book__button" onClick={()=>navigate(`/book/${titleSent}`)}>Ver libro</Button>
                </Card.Body>
            </Card>

        </Container>
    );
}
Book.propTypes = {
    imageSent: PropTypes.string.isRequired,
    titleSent: PropTypes.string.isRequired,
    shortDescription: PropTypes.string.isRequired,
};

export default Book;