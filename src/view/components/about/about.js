import React from "react";

class About extends React.Component {
    render() {
        return (
            <>
                <div style={{ paddingTop: '100px' }}>
                    <div style={{ fontSize: "20px" }}>
                        This website is created for people to exchange books with each other.
                        The website's name is "Sách Trade"
                    </div >
                    <div >
                        <a
                            style={{ color: '#7ceb9b' }}
                            href="https://www.facebook.com/lilnat2208/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            My contact
                        </a>
                    </div>
                </div>

            </>
        );
    }
}

export default About;