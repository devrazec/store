import React, { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { Image, Platform, ScrollView, StyleSheet, View } from 'react-native';
import { DataTable } from 'react-native-paper';

const getImageUri = (filename) =>
    Platform.OS === 'android'
        ? { uri: `asset:/images/product/${filename}` }
        : { uri: `images/product/${filename}` };

const Product = () => {

    const { dbProduct, darkMode } = useContext(GlobalContext);

    const [page, setPage] = useState(0);
    const [numberOfItemsPerPageList] = useState([5, 10, 20]);
    const [itemsPerPage, onItemsPerPageChange] = useState(
        numberOfItemsPerPageList[0]
    );

    const from = page * itemsPerPage;
    const to = Math.min((page + 1) * itemsPerPage, dbProduct.length);

    React.useEffect(() => {
        setPage(0);
    }, [itemsPerPage]);

    const bg = darkMode ? '#1e1e1e' : '#ffffff';
    const altBg = darkMode ? '#2a2a2a' : '#f5f5f5';
    const textColor = darkMode ? '#ffffff' : '#000000';

    return (
        <View style={{ flex: 1, backgroundColor: bg }}>
            <DataTable>
                <DataTable.Header style={{ backgroundColor: darkMode ? '#121212' : '#eeeeee' }}>
                    <DataTable.Title style={[styles.imageCol, { color: textColor }]}>Image</DataTable.Title>
                    <DataTable.Title style={[styles.nameCol, { color: textColor }]}>Name</DataTable.Title>
                    <DataTable.Title textStyle={{ color: textColor }}>Type</DataTable.Title>
                    <DataTable.Title textStyle={{ color: textColor }}>Color</DataTable.Title>
                </DataTable.Header>
            </DataTable>

            <ScrollView style={{ flex: 1 }}>
                <DataTable>
                    {dbProduct.slice(from, to).map((item, index) => (
                        <DataTable.Row
                            key={item.id}
                            style={{ backgroundColor: index % 2 === 0 ? bg : altBg }}
                        >
                            <DataTable.Cell style={styles.imageCol}>
                                <Image
                                    style={styles.thumbnail}
                                    source={getImageUri(item.image)}
                                />
                            </DataTable.Cell>
                            <DataTable.Cell textStyle={{ color: textColor }} style={styles.nameCol}>{item.name}</DataTable.Cell>
                            <DataTable.Cell textStyle={{ color: textColor }}>{item.type}</DataTable.Cell>
                            <DataTable.Cell textStyle={{ color: textColor }}>{item.color}</DataTable.Cell>
                        </DataTable.Row>
                    ))}
                </DataTable>
            </ScrollView>

            <DataTable>
                <DataTable.Pagination
                    style={{ backgroundColor: bg }}
                    page={page}
                    numberOfPages={Math.ceil(dbProduct.length / itemsPerPage)}
                    onPageChange={(page) => setPage(page)}
                    label={`${from + 1}-${to} of ${dbProduct.length}`}
                    numberOfItemsPerPageList={numberOfItemsPerPageList}
                    numberOfItemsPerPage={itemsPerPage}
                    onItemsPerPageChange={onItemsPerPageChange}
                    showFastPaginationControls
                    selectPageDropdownLabel={'Rows per page'}
                />
            </DataTable>
        </View>
    );
};

const styles = StyleSheet.create({
    thumbnail: {
        width: 50,
        height: 50,
        resizeMode: 'contain',
    },
    imageCol: {
        flex: 1,
    },
    nameCol: {
        flex: 3,
    },
});

export default Product;