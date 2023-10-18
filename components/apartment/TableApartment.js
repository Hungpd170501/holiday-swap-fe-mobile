import * as React from "react";
import { Text } from "react-native";
import { DataTable } from "react-native-paper";

const TableApartment = () => {
  const [page, setPage] = React.useState(0);
  const [numberOfItemsPerPageList] = React.useState([4, 3, 2]); // Đổi thứ tự để 4 là giá trị mặc định
  const [itemsPerPage, onItemsPerPageChange] = React.useState(
    numberOfItemsPerPageList[0]
  );

  const [items] = React.useState([
    {
      key: 1,
      name: "Cupcake",
      price: 356,
      date: 16,
    },
    {
      key: 2,
      name: "Eclair",
      price: 262,
      date: 16,
    },
    {
      key: 3,
      name: "998",
      price: 2000,
      date: "21 Oct - 21 Sep",
    },
    {
      key: 4,
      name: "093",
      price: 30900,
      date: "21-23 September",
    },
    {
      key: 5,
      name: "093",
      price: 30900,
      date: "21-23 September",
    },
    {
      key: 6,
      name: "093",
      price: 30900,
      date: "21-23 September",
    },
    {
      key: 7,
      name: "093",
      price: 30900,
      date: "21-23 September",
    },
  ]);

  const from = page * itemsPerPage;
  const to = Math.min((page + 1) * itemsPerPage, items.length);

  React.useEffect(() => {
    setPage(0);
  }, [itemsPerPage]);

  return (
    <DataTable>
      <DataTable.Header className="bg-blue-300 mt-3 rounded-md font-bold">
        <DataTable.Title>
          <Text className="font-bold">Apartment ID</Text>
        </DataTable.Title>
        <DataTable.Title>
          <Text>Price</Text>
        </DataTable.Title>
        <DataTable.Title numeric>
          <Text>Date</Text>
        </DataTable.Title>
      </DataTable.Header>

      {items.slice(from, to).map((item) => (
        <DataTable.Row key={item.key}>
          <DataTable.Cell>{item.name}</DataTable.Cell>
          <DataTable.Cell>{item.price}</DataTable.Cell>
          <DataTable.Cell numeric>{item.date}</DataTable.Cell>
        </DataTable.Row>
      ))}

      <DataTable.Pagination
        page={page}
        numberOfPages={Math.ceil(items.length / itemsPerPage)}
        onPageChange={(page) => setPage(page)}
        label={`${from + 1}-${to} of ${items.length}`}
        numberOfItemsPerPage={itemsPerPage}
        onItemsPerPageChange={onItemsPerPageChange}
      />
    </DataTable>
  );
};

export default TableApartment;
