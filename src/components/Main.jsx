// Objective: Main page component for the app
import '../styles/Main.css'
import Header from "./Header.jsx";
import Book from "./Book.jsx";
import { BooksContext } from "../context/BookContext.jsx";
import {useContext} from "react";
import Container from "react-bootstrap/Container";
import {Col, Row} from "react-bootstrap";



const Main = () => {
     const books = useContext(BooksContext)


    return (
        <>
        <Header/>
            <Container>
                <Row>
                        {books.map((book,  index) => (
                            <Col key={index} xs={12} md={4}>
                            <Book
                                imageSent={book.imageSent}
                                titleSent={book.titleSent}
                                shortDescription={book.shortDescription}
                            />
                            </Col>
                        ))}
                </Row>
            </Container>
        </>
    )
}



export default Main