import React, { useState } from "react";
import { faker } from "@faker-js/faker";
import { Fragment } from "react";

const FakeTransacions = [
  {
    id: 1,
    paid: faker.number.int({min:100, max:300}),
    Method: "Master Card",
    created: faker.date.past().toLocaleDateString(),
  },
  {
    id: 2,
    paid: faker.number.int({min:100, max:300}),
    Method: "Master Card",
    created: faker.date.past().toLocaleDateString(),
  },
  {
    id: 3,
    paid: faker.number.int({min:100, max:300}),
    Method: "Visa Card",
    created: faker.date.past().toLocaleDateString(),
  },
  {
    id: 4,
    paid: faker.number.int({min:100, max:300}),
    Method: "Master Card",
    created: faker.date.past().toLocaleDateString(),
  },
  {
    id: 5,
    paid: faker.number.int({min:100, max:300}),
    Method: "Visa Card",
    created: faker.date.past().toLocaleDateString(),
  },
  {
    id: 6,
    paid: faker.number.int({min:100, max:300}),
    Method: "Master Card",
    created: faker.date.past().toLocaleDateString(),
  },
];

const Transactions = () => {
  const [productsID, setProductsID] = useState("");
  const [productsPrice, setProductsPrice] = useState(null);
  return (
    <div>
      <div className="flex gap-4">
        <div
          className="grid grid-flow-row grid-cols-5
        border gap-y-5 place-items-center py-4 flex-grow rounded-lg"
        >
          <div>TransacionID</div>
          <div>Paid</div>
          <div>Method</div>
          <div>Created</div>
          <div>Actions</div>
          {FakeTransacions.map((transaction) => (
            <Fragment key={transaction.id}>
              <div className="text-sm">#{transaction.id}</div>
              <div className="text-sm">{transaction.paid} ₹</div>
              <div className="text-sm">{transaction.Method}</div>
              <div className="text-sm">{transaction.created}</div>
              <button
                className="border rounded-sm text-xs px-2 py-1"
                onClick={() => {
                  setProductsID(transaction.id);
                  setProductsPrice(transaction.paid);
                }}
              >
                View
              </button>
            </Fragment>
          ))}
        </div>

        {productsID !== "" ? (
          <div className="min-w-[300px] border rounded-lg border-[#ccc] p-2 mx-auto flex flex-col ">
            <div className="font-bold">Transaction ID:</div>
            <div>{productsID}</div>

            <div className="font-bold">Product Name:</div>
            <div>{faker.word.noun()}</div>

            <div className="font-bold">Price:</div>
            <div>{productsPrice}$</div>

            <div className="font-bold">Quantity:</div>
            <div>{faker.number.int({min:1,max:10})}</div>

            <div className="font-bold">Customer Name:</div>
            <div>{faker.person.firstName()}</div>

            <div className="font-bold">Email:</div>
            <div>{faker.person.fullName()}.@gmail.com</div>

            <div className="font-bold text-ellipsis">Address:</div>
            <div>{faker.location.streetAddress()}</div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Transactions;
