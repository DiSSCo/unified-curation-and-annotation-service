/* Import Dependencies */
import { Container, Row, Col } from "react-bootstrap";

/* Import Styles */
import styles from './staticPage.module.scss';

/* Import Components */
import { Header, Footer } from "components/elements/Elements";


/* Source Material type */
type SourceMaterial = {
    title: string,
    paragraphs: {
        text: string,
        links?: {
            [textFragment: string]: string | undefined
        }
        bullets?: string[],
        logo?: string
    }[]
};

/* Props type */
type Props = {
    sourceMaterial: SourceMaterial
};


/**
 * Component that renders the base template for a static page
 * @returns JSX Component
 */
const StaticPage = (props: Props) => {
    const { sourceMaterial } = props;

    return (
        <div className="h-100 d-flex flex-column">
            {/* Render header*/}
            <Header span={10}
                offset={1}
            />

            {/* Static page body */}
            <Container fluid className="flex-grow-1 overflow-hidden">
                <Row className="h-100">
                    <Col lg={{ span: 6, offset: 3 }}
                        className="h-100 py-5 overflow-scroll"
                    >
                        {/* Based upon source material, render this static page's contents */}
                        <h2>
                            {sourceMaterial.title}
                        </h2>
                        {sourceMaterial.paragraphs.map(paragraph => (
                            <Row className="mt-4">
                                <Col>
                                    {/* Logo and paragraph text */}
                                    <Row>
                                        {paragraph.logo &&
                                            <Col lg="auto">
                                                <img src={`/src/webroot/logos/${paragraph.logo}`}
                                                    alt={paragraph.logo}
                                                    className={styles.logo}
                                                />
                                            </Col>
                                        }
                                        <Col>
                                            <p>
                                                {paragraph.text.split(' ').map(textSegment => {
                                                    if (paragraph.links && textSegment in paragraph.links) {
                                                        console.log(paragraph.links);


                                                        return <a href={paragraph.links[textSegment]}
                                                            target="_blank"
                                                            rel="noreferer"
                                                            className="tc-accent"
                                                        >
                                                            {`${textSegment} `}
                                                        </a>;
                                                    } else {
                                                        return `${textSegment} `;
                                                    }
                                                })}
                                            </p>
                                        </Col>
                                    </Row>
                                    {/* Paragraph bullets */}
                                    {paragraph.bullets &&
                                        <Row>
                                            <Col>
                                                <ul className="fs-4">
                                                    {paragraph.bullets.map(bullet => (
                                                        <li>{bullet}</li>
                                                    ))}
                                                </ul>
                                            </Col>
                                        </Row>
                                    }
                                </Col>
                            </Row>
                        ))}
                    </Col>
                </Row>
            </Container>

            {/* Render footer */}
            <Footer span={10}
                offset={1}
            />
        </div>
    );
};

export default StaticPage;