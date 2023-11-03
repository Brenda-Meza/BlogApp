import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const SearchResults = ({ searchResults }) => {
    return (
        <>
        <div>
          <table className='table'>
            <tbody>
              {searchResults.length ? searchResults.map((blog, index) => (
                <tr key={index} className='BlogContent'>
                <Card className="text-center">
                  <Card.Header>
                    <Card.Title>{blog.title}</Card.Title>
                  </Card.Header>
                  <Card.Body>
                    <Card.Text>
                    {blog.desc}
                    </Card.Text>
                    <Button variant="outline-light">View Blog</Button>
                  </Card.Body>
                  {/* <Card.Footer className="text-muted">2 days ago</Card.Footer> */}
                </Card>
                </tr>
              )) : 
              <div className='noMatch'>
                  <p>No items match your search</p>
              </div> 
              
              }
            </tbody>
          </table>
        </div>
        </>
      );
}

export default SearchResults