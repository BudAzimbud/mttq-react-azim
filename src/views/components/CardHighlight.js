import React from "react";
import { Row, Col, Card, CardTitle, Progress } from "reactstrap";
import Swiper from "react-id-swiper";

function CardHighlight({ sliderPerView = 0, spaceBetween = 20, data = [] }) {
  const swiperParams = {
    slidesPerView: sliderPerView,
    spaceBetween: spaceBetween,
  };

  if(data.length === 0){
    return <div className="text-center">Data is empty</div>
  }
  return (
    <Row>
      <Col>
        <Swiper {...swiperParams}>
          {/* Your carousel content here */}
          {data.map((item, idx) => (
            <Card body color="success" className="d-flex text-white" key={idx}>
              <div className="d-flex p-0 gap-2">
                <CardTitle tag="h5" className="text-nowrap text-white">
                  Pertamax Turbo
                </CardTitle>
                <p className="small text-white">
                  Last transaction 2 minutes ago
                </p>
              </div>
              <div>
                <p>40/ 200 L</p>
                <h4>Status : Filling</h4>
              </div>
              <div className="p-1 bg-white rounded">
                <Progress value={100} color="success" />
              </div>
            </Card>
          ))}

          {/* Add more cards as needed */}
        </Swiper>
      </Col>
    </Row>
  );
}

export default CardHighlight;
