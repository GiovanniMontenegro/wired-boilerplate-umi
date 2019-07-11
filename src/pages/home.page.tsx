import React from 'react';
import { Row, Card } from 'antd';

const { Meta } = Card;
export default function() {
  return (
    <Row type="flex" align="middle" justify="center">
      <Card
        style={{ width: 800 }}
        cover={
          <img
            alt="New content"
            style={{ width: 800 }}
            src="https://images.unsplash.com/photo-1527689368864-3a821dbccc34"
          />
        }
      >
        <Meta
          title="Create your new beautiful content"
          description="#new #react #wired-boilerplate"
        />
      </Card>
    </Row>
  );
}
