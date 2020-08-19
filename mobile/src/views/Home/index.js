import React, { useState, useEffect } from 'react'; // mobile-web
import { Text, View, TouchableOpacity, ScrollView, ActivityIndicator } from 'react-native'; // Só mobile 

import styles from './styles';

// COMPONENTES
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import TaskCard from '../../components/TaskCard';

// API
import api from '../../services/api';

export default function Home() {
    const [filter, setFilter] = useState('today');
    const [tasks, setTasks] = useState([]);
    const [load, setLoad] = useState(false);
    const [lateCount, setLateCount] = useState();

    async function loadTasks() {
        setLoad(true);
        await api.get(`/task/filter/${filter}/11:11:11:11:11:11`)
            .then(response => {
                setTasks(response.data)
                setLoad(false)
            });
    }

    async function lateVerify() {
        await api.get(`/task/filter/late/11:11:11:11:11:11`)
            .then(response => {
                setLateCount(response.data.length)
            });
    }

    function notification(){
        setFilter('late');
    }

    useEffect(() => {
        loadTasks();
        lateVerify();
    }, [filter])


    return (

        <View style={styles.container}>
            <Header showNotification={true} showBack={false} pressNotification={notification} late={lateCount}/>

            <View style={styles.filter}>

                <TouchableOpacity onPress={() => setFilter('all')}>
                    <Text style={filter == 'all' ?
                        styles.filterTextActived
                        :
                        styles.filterTextInactived}>Todos</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => setFilter('today')}>
                    <Text style={filter == 'today' ?
                        styles.filterTextActived
                        :
                        styles.filterTextInactived}>Hoje</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => setFilter('week')}>
                    <Text style={filter == 'week' ?
                        styles.filterTextActived
                        :
                        styles.filterTextInactived}>Semana</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => setFilter('month')}>
                    <Text style={filter == 'month' ?
                        styles.filterTextActived
                        :
                        styles.filterTextInactived}>Mês</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => setFilter('year')}>
                    <Text style={filter == 'year' ?
                        styles.filterTextActived
                        :
                        styles.filterTextInactived}>Ano</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.title}>
    <Text style={styles.titleText}>TAREFAS { filter == 'late' && ' ATRASADAS'}</Text>
            </View>


            <ScrollView style={styles.content} contentContainerStyle={{ alignItems: 'center' }}>
                {
                    load ?
                        <ActivityIndicator color='#EE6B26' size={50} />
                        :
                        tasks.map(task => (
                            <TaskCard done={false} title={task.title} when={task.when} type={task.type} />
                        ))
                }
            </ScrollView>

            <Footer icon={'add'} />
        </View>
    )
}