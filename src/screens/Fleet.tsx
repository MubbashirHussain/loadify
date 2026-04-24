import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
  Image,
} from 'react-native';
import Container from '../components/UI/Container';
import theme from '../config/theme';
import { Button } from '../components/base';
import Section from '../components/base/Section';

// Mock data
const operationalFleet = [
  {
    id: '1',
    truckPlateNumber: 'TR-9942',
    status: 'In Transit',
    truckType: 'Heavy Duty Semi',
    totalMileage: '120,000 miles',
    lastTrip: '2h Ago',
  },
  {
    id: '2',
    truckPlateNumber: 'TR-8810',
    status: 'Loading',
    truckType: 'Heavy Duty Semi',
    capacity: '10 tons',
    totalMileage: '120,000 miles',
    lastTrip: '2h Ago',
  },
];

const listOfFleet = [
  {
    id: '3',
    truckPlateNumber: 'TR-1021',
    status: 'Available',
    truckType: 'Flatbed',
    totalMileage: '120,000 miles',
    capacity: '10 tons',
  },
  {
    id: '4',
    truckPlateNumber: 'TR-5532',
    status: 'Maintenance',
    truckType: 'Reefer',
    totalMileage: '150,000 miles',
    capacity: '20 Tons',
  },
  {
    id: '5',
    truckPlateNumber: 'TR-7729',
    status: 'Available',
    truckType: 'Box Truck',
    totalMileage: '80,000 miles',
    capacity: '10 Tons',
  },
];

const Clients = () => {
  return (
    <Container scrollable>
      {/* Operational Fleet Section */}
      <View style={styles.sectionContainer}>
        <View style={styles.sectionHeader}>
          <View>
            <Text>Operational</Text>
            <Text
              style={[
                styles.sectionTitle,
                {
                  color: theme.colors.primary[600],
                  fontSize: theme.fontSizes['6xl'],
                },
              ]}
            >
              Fleet
            </Text>
          </View>
          <Button
            onPress={() => {}}
            variant="contained"
            style={{ flex: 0.5, backgroundColor: theme.colors.primary[500] }}
          >
            + Add New
          </Button>
        </View>
        <View style={{ flexDirection: 'row', gap: 16, marginVertical: 16 }}>
          <View style={[styles.operationalStatsCard, { flex: 1 }]}>
            {/* <Image source={{ uri: '' }} /> */}

            <Text style={styles.operationalCount}>🚚</Text>
            <Text style={styles.operationalCount}>14</Text>
            <Text>Active Units</Text>
          </View>
          <View style={[styles.operationalStatsCard, { flex: 0.5 }]}>
            {/* <Image source={{ uri: '' }} /> */}

            <Text style={styles.operationalCount}>🔧</Text>
            <Text style={styles.operationalCount}>2</Text>
            <Text>Maintenance</Text>
          </View>
        </View>

        {operationalFleet.map(fleet => (
          <TouchableOpacity
            key={fleet.id}
            style={styles.operationalCard}
            activeOpacity={0.8}
          >
            <View style={styles.fleetHeader}>
              <View style={styles.truckIconBadge}>
                <Text style={styles.truckEmoji}>🚚</Text>
              </View>
              <View style={styles.fleetHeaderDetails}>
                <Text style={styles.truckId}>{fleet.truckPlateNumber}</Text>
                <Text style={styles.driverName}>{fleet.truckType}</Text>
              </View>
              <View
                style={[
                  styles.statusBadge,
                  fleet.status === 'In Transit'
                    ? styles.statusTransit
                    : styles.statusLoading,
                ]}
              >
                <Text style={styles.statusText}>{fleet.status}</Text>
              </View>
            </View>

            <View style={styles.routeContainer}>
              <View style={styles.routeTrack}>
                <View style={styles.routeTrackStart} />
                <View style={styles.routeTrackLine} />
                <View style={styles.routeTrackEnd} />
              </View>
              <View style={styles.routeLocations}>
                <Text style={styles.routeText}>
                  Mileage: {fleet.totalMileage}
                </Text>
                <Text style={styles.routeText}>
                  Last Trip: {fleet.lastTrip}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </View>

      {/* List of Fleet Section */}
      <View style={[styles.sectionContainer, { marginTop: 8 }]}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>List of Fleet</Text>
          <View style={styles.badgeContainer}>
            <Text style={styles.badgeText}>{listOfFleet.length}</Text>
          </View>
        </View>

        {listOfFleet.map((fleet, index) => (
          <TouchableOpacity
            key={fleet.id}
            style={[
              styles.listCard,
              index === listOfFleet.length - 1 && styles.lastListCard,
            ]}
            activeOpacity={0.7}
          >
            <View style={styles.listCardContent}>
              <View style={styles.listIconContainer}>
                <Text style={styles.listIconEmoji}>🚛</Text>
              </View>
              <View style={styles.listTextContainer}>
                <Text style={styles.listTruckId}>{fleet.truckPlateNumber}</Text>
                <Text style={styles.listTruckSub}>
                  {fleet.truckType} • {fleet.capacity}
                </Text>
              </View>
            </View>
            <View
              style={[
                styles.listStatusDot,
                fleet.status === 'Available'
                  ? styles.dotAvailable
                  : styles.dotMaintenance,
              ]}
            />
          </TouchableOpacity>
        ))}
      </View>

      {/* Spacer */}
      <View style={{ height: 40 }} />
    </Container>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginBottom: 24,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
    paddingHorizontal: 4,
  },
  sectionTitle: {
    fontSize: theme.fontSizes.lg,
    fontWeight: 'bold',
    color: '#2A3439',
    letterSpacing: -0.3,
  },
  seeAllText: {
    fontSize: 14,
    fontWeight: '600',
  },
  operationalCount: {
    fontSize: theme.fontSizes['8xl'],
    fontWeight: 'bold',
  },
  badgeContainer: {
    backgroundColor: '#DBE1FF',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 12,
  },
  badgeText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#0053DB',
  },
  operationalStatsCard: {
    flexDirection: 'column',
    gap: 8,
    backgroundColor: theme.colors.secondary[100],
    padding: 16,
    borderRadius: 16,
  },

  operationalCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.05,
        shadowRadius: 10,
      },
      android: {
        elevation: 3,
      },
    }),
  },
  fleetHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  truckIconBadge: {
    width: 44,
    height: 44,
    borderRadius: 12,
    backgroundColor: '#F0F4F7',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  truckEmoji: {
    fontSize: 20,
  },
  fleetHeaderDetails: {
    flex: 1,
  },
  truckId: {
    fontSize: 16,
    fontWeight: '700',
    color: '#2A3439',
    marginBottom: 2,
  },
  driverName: {
    fontSize: 13,
    fontWeight: '500',
    color: '#6B7280',
  },
  statusBadge: {
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 8,
  },
  statusTransit: {
    backgroundColor: '#E5F3EB',
  },
  statusLoading: {
    backgroundColor: '#FFF4E5',
  },
  statusText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#2A3439',
  },
  routeContainer: {
    flexDirection: 'row',
    backgroundColor: '#F7F9FB',
    borderRadius: 12,
    padding: 12,
  },
  routeTrack: {
    width: 12,
    alignItems: 'center',
    marginRight: 10,
    paddingVertical: 4,
  },
  routeTrackStart: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#0053DB',
  },
  routeTrackLine: {
    width: 2,
    flex: 1,
    backgroundColor: '#D9E4EA',
    marginVertical: 2,
  },
  routeTrackEnd: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#9F403D',
  },
  routeLocations: {
    flex: 1,
    justifyContent: 'space-between',
    minHeight: 44,
  },
  routeText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#2A3439',
  },
  listCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 14,
    marginBottom: 12,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.03,
        shadowRadius: 8,
      },
      android: {
        elevation: 2,
      },
    }),
  },
  lastListCard: {
    marginBottom: 0,
  },
  listCardContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  listIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F0F4F7',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  listIconEmoji: {
    fontSize: 18,
  },
  listTextContainer: {
    justifyContent: 'center',
  },
  listTruckId: {
    fontSize: 15,
    fontWeight: '700',
    color: '#2A3439',
    marginBottom: 2,
  },
  listTruckSub: {
    fontSize: 13,
    fontWeight: '500',
    color: '#6B7280',
  },
  listStatusDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
  },
  dotAvailable: {
    backgroundColor: '#10B981', // Green
  },
  dotMaintenance: {
    backgroundColor: '#EF4444', // Red
  },
});

export default Clients;
