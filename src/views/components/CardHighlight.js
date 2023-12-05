import React from "react";
import { Row, Col, Card, CardTitle, Progress } from "reactstrap";
import Swiper from "react-id-swiper";
import moment from "moment";
function CardHighlight({ sliderPerView = 0, spaceBetween = 20, data = [] }) {
  const swiperParams = {
    slidesPerView: sliderPerView,
    spaceBetween: spaceBetween,
  };

  if (data.length === 0) {
    return <div className="text-center">Data is empty</div>;
  }

  const conditionStock = (current_stock, maximum_stock) => {
    console.log({maximum_stock , current_stock})
    console.log(maximum_stock / current_stock)
    if (current_stock / maximum_stock > 0.75) {
      return {
        style: "success",
        status: "Standby",
      };
    }

    if (current_stock / maximum_stock >= 0.5) {
      return {
        style: "warning",
        status: "Standby",
      };
    }

    if (current_stock / maximum_stock < 0.5) {
      return {
        style: "danger",
        status: "Filling",
      };
    }
  };
  return (
        <Swiper {...swiperParams}>
          {data.map((item, idx) => (
            <Card
              body
              color={conditionStock(item.current_stock, item.maximum_stock).style}
              className="d-flex text-white"
              key={idx}
            >
              <div className="d-flex p-0 gap-2">
                <CardTitle tag="h5" className="text-nowrap text-white">
                  {item.name}
                </CardTitle>
                <p className="small text-white">
                  {moment(item.updated_at).fromNow()}
                </p>
              </div>
              <div>
                <p>
                  {item.current_stock} / {item.maximum_stock} L
                </p>
                <h4>
                  Status :{" "}
                  {conditionStock(item.current_stock, item.maximum_stock).status.toUpperCase()}
                </h4>
              </div>
              <div className="p-1 bg-white rounded">
                <Progress
                  value={100}
                  color={conditionStock(item.current_stock, item.maximum_stock).style}
                />
              </div>
            </Card>
          ))}

          {/* Add more cards as needed */}
        </Swiper>
  );
}

export default CardHighlight;
