import { ApiResponse } from "../types/ApiResponse";

type AnswerQuestionProps = {
  questionId: number;
  answerId: number;
};

type RequestProps<T> = {
  path: string;
  method: "GET" | "POST" | "PUT" | "DELETE";
  body: ApiResponse<T>;
};

const request = async <T>({ body, method, path }: RequestProps<T>) => {
  return await fetch(`${process.env.NEXT_PUBLIC_API_URL}${path}`, {
    method,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
    },
    body: JSON.stringify({ ...body }),
  });
};

export const answerQuestionRequest = async ({
  answerId,
  questionId,
}: AnswerQuestionProps) => {
  return await request({
    path: "/user-answers",
    method: "POST",
    body: {
      data: {
        question: questionId,
        answer: answerId,
      },
    },
  });
};

export const getQuestionResultrequest = async (questionId: number) => {
  return await request({
    path: "/user-answer/results",
    method: "POST",
    body: {
      data: {
        question: questionId,
      },
    },
  });
};
