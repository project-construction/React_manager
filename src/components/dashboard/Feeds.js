import React from "react";
import {
  Card,
  CardBody,
  CardTitle,
  ListGroup,
  CardSubtitle,
  ListGroupItem,
  Button,
} from "reactstrap";

const FeedData = [
  {
    title: "공지사항1",
    icon: "bi bi-bell",
    color: "primary",
    date: "1 minute ago",
  },
  {
    title: "공지사항2",
    icon: "bi bi-person",
    color: "info",
    date: "6 minute ago",
  },
  {
    title: "공지사항3",
    icon: "bi bi-hdd",
    color: "danger",
    date: "19 minute ago",
  },
  {
    title: "공지사항4",
    icon: "bi bi-bag-check",
    color: "success",
    date: "34 minute ago",
  },
  {
    title: "공지사항5",
    icon: "bi bi-bell",
    color: "dark",
    date: "47 minute ago",
  },
  {
    title: "공지사항6",
    icon: "bi bi-hdd",
    color: "warning",
    date: "1 hours ago",
  },
];

const Feeds = () => {
  return (
      <Card>
        <CardBody>
          <CardTitle tag="h5">공지사항</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            공지사항입니다
          </CardSubtitle>
          <ListGroup flush className="mt-4">
            {FeedData.map((feed, index) => (
                <ListGroupItem
                    key={index}
                    action
                    href="/"
                    tag="a"
                    className="d-flex align-items-center p-3 border-0"
                >
                  <Button
                      className="rounded-circle me-3"
                      size="sm"
                      color={feed.color}
                  >
                    <i className={feed.icon}></i>
                  </Button>
                  {feed.title}
                  <small className="ms-auto text-muted text-small">
                    {feed.date}
                  </small>
                </ListGroupItem>
            ))}
          </ListGroup>
        </CardBody>
      </Card>
  );
};

export default Feeds;