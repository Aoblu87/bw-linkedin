export default function Experience(profile, setProfile) {
  return null;
  // const [experience, setExperience] = useState([]);
  // useEffect(() => {
  //   fetch(
  //     `https://striveschool-api.herokuapp.com/api/profile/${profile._id}/experiences`,
  //     {
  //       headers: {
  //         Authorization: process.env.REACT_APP_MY_TOKEN,
  //       },
  //     }
  //   )
  //     .then((r) => r.json())
  //     .then(setExperience);
  // }, [profile._id]);
  // return (
  //   <Card className="rounded-3 me-4 mb-2">
  //     <Card.Body className="d-flex flex-column ">
  //       <Row>
  //         <Card.Title>
  //           <h4 className="fw-bolder mt-2">Esperienza</h4>
  //         </Card.Title>
  //       </Row>
  //       <Row>
  //         <Figure className="col-2">
  //           <Figure.Image
  //             width={171}
  //             height={180}
  //             alt="171x180"
  //             src="holder.js/171x180"
  //           />
  //         </Figure>
  //         <Col>
  //           <Card.Subtitle>
  //             {experience.username} - Università di Pisa
  //           </Card.Subtitle>
  //           <Card.Subtitle>
  //             {experience.role} - Università di Pisa
  //           </Card.Subtitle>
  //           <Card.Subtitle>
  //             {experience.company} - Università di Pisa
  //           </Card.Subtitle>
  //           <Card.Subtitle>
  //             {experience.startDate} - Università di Pisa
  //             {experience.endDate} - Università di Pisa
  //           </Card.Subtitle>
  //           <Card.Text className="fs-6  text-secondary mt-2 ">
  //             {experience.area}
  //             <Dot />
  //           </Card.Text>
  //           <Card.Text className="fs-6  text-secondary ">
  //             348 collegamenti
  //           </Card.Text>
  //         </Col>
  //       </Row>
  //     </Card.Body>
  //   </Card>
  // );
}
