import React from "react";

const commentsData = [
  {
    name: "Divyateja",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing",
    replies: [],
  },
  {
    name: "Divyateja",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing",
    replies: [
      {
        name: "Divyateja",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing",
        replies: [],
      },
      {
        name: "Divyateja",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing",
        replies: [],
      },
    ],
  },
  {
    name: "Divyateja",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing",
    replies: [
      {
        name: "Divyateja",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing",
        replies: [
          {
            name: "Divyateja",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing",
            replies: [
              {
                name: "Divyateja",
                text: "Lorem ipsum dolor sit amet consectetur adipisicing",
                replies: [
                  {
                    name: "Divyateja",
                    text: "Lorem ipsum dolor sit amet consectetur adipisicing",
                    replies: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Divyateja",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing",
    replies: [
      {
        name: "Divyateja",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing",
        replies: [],
      },
    ],
  },
];

const Comment = ({ data }) => {
  const { name, text, replies } = data;

  return (
    <div className="flex shadow-sm bg-gray-300 p-2 rounded-md my-2">
      <img
        className="w-12 h-12 rounded-lg"
        alt="user"
        src="https://static.vecteezy.com/system/resources/thumbnails/005/545/335/small/user-sign-icon-person-symbol-human-avatar-isolated-on-white-backogrund-vector.jpg"
      />
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentsList = ({ comments }) => {
  //Don't use indexes as keys
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment data={comment} />
      <div className="pl-5 border border-l-black ml-5">
        <CommentsList comments={comment.replies} />
      </div>
    </div>
  ));
};

const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold">Comments:</h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
