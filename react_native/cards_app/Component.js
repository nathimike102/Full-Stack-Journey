import React, {useState, useEffect} from "react";
import { View, StyleSheet, Text, FlatList, useWindowDimensions } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Button, Card, Dialog, Portal, Snackbar } from "react-native-paper";
import { BlurView } from "expo-blur";
import image1 from "./assets/image1.jpeg";

const Component = () => {
    const insets = useSafeAreaInsets();
    const [vis, setVis] = useState(false);
    const [deleted, setDeleted] = useState(false);
    const [learn, setLearn] = useState(false);
    const [text, setText] = useState("");
    const { width } = useWindowDimensions();
    const cardWidth = Math.floor((width - 32) / 2);
    const [Mycards, setMyCards] = useState([
        { id: 1, title: "Card 1", img : image1, description: "This is the first card." },
        { id: 2, title: "Card 2", img : image1, description: "This is the second card." },
        { id: 3, title: "Card 3", img : image1, description: "This is the third card." },
        { id: 4, title: "Card 4", img : image1, description: "This is the first card." },
        { id: 5, title: "Card 5", img : image1, description: "This is the second card." },
        { id: 6, title: "Card 6", img : image1, description: "This is the third card." },
    ])

    const LearnMore = (id) => {
        const card = Mycards.find(card => card.id === id);
        if (card) {
            setLearn(true);
            setText(card.description + " This is additional information about the card.");
        }
    }
    
    const DeleteCard = (id) => {
        setVis(true);
        setDeleted(true);
        setTimeout(() => {
            setMyCards(prevCards => prevCards.filter(card => card.id !== id));
        }, 1000);
    }

    useEffect(() => {
        if (deleted) {
            setTimeout(() => {
                setDeleted(false);
            }, 1000);
        }
    }, [deleted]);

    return (
        <>
            <View style={[Mystyles.MystatusBar, { paddingTop: insets.top }]} />
            <Text style={Mystyles.header}>Welcome to the Cards App</Text>
            <Portal>
                {(vis || learn) && (
                    <BlurView
                        intensity={20}
                        tint="light"
                        style={Mystyles.blurOverlay}
                        pointerEvents="none"
                    />
                )}
                <Dialog 
                    style={Mystyles.dialog}
                    visible={vis} onDismiss={() => setVis(false)}
                >
                    <Dialog.Title>Card Deleted</Dialog.Title>
                    <Dialog.Content>
                        <Text>The card has been successfully deleted.</Text>
                    </Dialog.Content>
                    <Dialog.Actions>
                        <Button 
                            style={Mystyles.button}
                            onPress={() => setVis(false)}
                        >OK</Button>
                    </Dialog.Actions>
                </Dialog>
                <Dialog 
                    style={Mystyles.dialog}
                    visible={learn} onDismiss={() => setLearn(false)}
                >
                    <Dialog.Title>Learn More</Dialog.Title>
                    <Dialog.Content>
                        <Text>{text}</Text>
                    </Dialog.Content>
                    <Dialog.Actions>
                        <Button 
                            style={Mystyles.button}
                            onPress={() => setLearn(false)}
                        >OK</Button>
                    </Dialog.Actions>
                </Dialog>
            </Portal>
            <FlatList 
                style={Mystyles.cardsView}
                contentContainerStyle={Mystyles.cardsContent}
                columnWrapperStyle={Mystyles.cardRow}
                numColumns={2}
                data={Mycards}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <Card style={[Mystyles.card, { width: cardWidth }]}>
                        <Card.Cover source={item.img} style={[Mystyles.img, { width: cardWidth - 16 }]} />
                        <Card.Title title={item.title} />
                        <Card.Content>
                            <Text>{item.description}</Text>
                        </Card.Content>
                        <Card.Actions>
                            <Button 
                                style={Mystyles.button}
                                contentStyle={Mystyles.buttonContent}
                                labelStyle={Mystyles.buttonLabel}
                                onPress={() => LearnMore(item.id)} 
                            >
                                <Text>Learn More</Text>
                            </Button>
                            <Button
                                loading={deleted}
                                style={Mystyles.button} 
                                contentStyle={Mystyles.buttonContent}
                                labelStyle={Mystyles.buttonLabel}
                                onPress={() => DeleteCard(item.id)}
                            >
                                <Text>Delete</Text>
                            </Button>
                        </Card.Actions>
                    </Card>
                )}
            />
            <Snackbar
                visible={deleted}
                onDismiss={() => setDeleted(false)}
                duration={1000}
            >
                Card Deleted
            </Snackbar>
        </>
    );
};

export default Component;

const Mystyles = StyleSheet.create({
    MystatusBar: {
        backgroundColor: "#ffffff",
    },
    container: {
        backgroundColor: "#ffffff",
    },
    header: {
        textAlign: "center",
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 10,
    },
    blurOverlay: {
        zIndex: 2,
    },
    dialog: {
        backgroundColor: "#ffffff",
        zIndex: 3,
    },
    cardsView: {
        paddingTop: 20,
        alignSelf: "center",
        zIndex: 0,
    },
    cardsContent: {
        paddingBottom: 20,
    },
    cardRow: {
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
    },
    card: {
        alignItems: "center",
        marginBottom: 12,
        height: 350,
    },
    img: {
        height: 200,
    },
    button: {
        color: "#ffffff",
    },
    buttonContent: {
        padding: 0,
        minHeight: 26,
    },
    buttonLabel: {
        fontSize: 12,
        marginVertical: 0,
        marginHorizontal: 10,
    },
});