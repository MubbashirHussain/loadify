import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Platform,
} from 'react-native';
import Container from '../components/UI/Container';

const Dashboard = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <Container scrollable style={{ backgroundColor: '#ffffffff' }}>
        {/* Quick Action */}
        <TouchableOpacity style={styles.quickAction}>
          <View style={styles.quickActionInner}>
            <View style={styles.repeatIconContainer}>
              <Text style={styles.repeatIcon}>↻</Text>
            </View>
            <Text style={styles.quickActionText}>Repeat Last Entry</Text>
          </View>
          <Text style={styles.quickActionSubText}>2h ago: LogiTrans...</Text>
        </TouchableOpacity>

        {/* Date & Client */}
        <View style={styles.section}>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>ENTRY DATE</Text>
            <View style={styles.inputContainer}>
              <Text style={styles.dateText}>Oct 24, 2023</Text>
            </View>
          </View>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>CLIENT</Text>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="Search client name..."
                placeholderTextColor="#6B7280"
              />
            </View>
          </View>
        </View>

        {/* Route Details */}
        <View style={styles.routeSection}>
          <Text style={styles.label}>ROUTE DETAILS</Text>
          <View style={styles.routeContainer}>
            <View style={styles.routeTrack}>
              <View style={styles.routeTrackStart} />
              <View style={styles.routeTrackLine} />
              <View style={styles.routeTrackEnd} />
            </View>
            <View style={styles.routeInputs}>
              <View style={[styles.inputContainer, styles.routeInput]}>
                <TextInput
                  style={styles.input}
                  placeholder="From: Loading Point"
                  placeholderTextColor="#6B7280"
                />
              </View>
              <View style={[styles.inputContainer, styles.routeInput]}>
                <TextInput
                  style={styles.input}
                  placeholder="To: Delivery Point"
                  placeholderTextColor="#6B7280"
                />
              </View>
            </View>
          </View>
        </View>

        {/* Truck & Loading */}
        <View style={styles.row}>
          <View style={[styles.inputGroup, { flex: 1, marginRight: 12 }]}>
            <Text style={styles.label}>TRUCK ID</Text>
            <View style={styles.inputContainer}>
              <TextInput
                style={[styles.input, styles.boldInput]}
                defaultValue="TR-9942"
              />
            </View>
          </View>
          <View style={[styles.inputGroup, { flex: 1 }]}>
            <Text style={styles.label}>WEIGHT (TONS)</Text>
            <View style={styles.inputContainer}>
              <TextInput
                style={[styles.input, styles.boldInput]}
                defaultValue="24.5"
                keyboardType="numeric"
              />
            </View>
          </View>
        </View>

        {/* Rate & Total */}
        <View style={styles.rateTotalSection}>
          <View style={[styles.row, { alignItems: 'flex-start' }]}>
            <View style={[styles.inputGroup, { flex: 1, marginRight: 12 }]}>
              <Text style={styles.label}>RATE PER TON</Text>
              <View style={styles.rateInputWrap}>
                <Text style={styles.currencyIcon}>$</Text>
                <TextInput
                  style={styles.rateInput}
                  defaultValue="42.00"
                  keyboardType="numeric"
                />
              </View>
            </View>
            <View
              style={[
                styles.inputGroup,
                { flex: 1, alignItems: 'flex-end', paddingTop: 2 },
              ]}
            >
              <Text style={[styles.label, { color: '#0053DB' }]}>
                TOTAL AMOUNT
              </Text>
              <Text style={styles.totalAmount}>$ 1,029.00</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.addExpenseBtn}>
            <Text style={styles.addExpenseText}>+ Add Expense</Text>
          </TouchableOpacity>
        </View>

        {/* Optional Notes */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>OPTIONAL NOTES</Text>
          <View style={[styles.inputContainer, styles.textAreaContainer]}>
            <TextInput
              style={styles.textArea}
              placeholder="Add trip remarks..."
              placeholderTextColor="#6B7280"
              multiline
            />
          </View>
        </View>

        {/* Spacer for FAB */}
        <View style={{ height: 90 }} />
      </Container>
      {/* FAB Container */}
      <View style={styles.fabContainer}>
        <TouchableOpacity style={styles.fab}>
          <Text style={styles.fabText}>Save Entry</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // paddingHorizontal: 24,
    height: 60,
    backgroundColor: '#fff',
  },
  headerButton: {
    width: 32,
    height: 32,
    justifyContent: 'center',
  },
  iconText: {
    fontSize: 24,
    color: '#2A3439',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#2A3439',
    letterSpacing: -0.3,
  },
  profileIcon: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#D9E4EA',
  },
  quickAction: {
    backgroundColor: '#DBE1FF',
    borderRadius: 12,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  quickActionInner: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  repeatIconContainer: {
    marginRight: 8,
  },
  repeatIcon: {
    fontSize: 18,
    color: '#0048BF',
    fontWeight: '700',
  },
  quickActionText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#0048BF',
  },
  quickActionSubText: {
    fontSize: 12,
    fontWeight: '500',
    color: '#0048BF',
    opacity: 0.8,
  },
  section: {
    marginBottom: 16,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  inputGroup: {
    marginBottom: 16,
  },
  label: {
    fontSize: 10,
    fontWeight: '700',
    color: '#566166',
    marginBottom: 8,
    letterSpacing: 0.5,
  },
  inputContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    paddingHorizontal: 16,
    height: 52,
    justifyContent: 'center',
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
  input: {
    fontSize: 16,
    fontWeight: '500',
    color: '#2A3439',
    height: '100%',
  },
  boldInput: {
    fontWeight: '700',
    fontSize: 16,
  },
  dateText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#2A3439',
  },
  routeSection: {
    backgroundColor: '#F0F4F7',
    borderRadius: 16,
    padding: 16,
    marginBottom: 20,
  },
  routeContainer: {
    flexDirection: 'row',
    marginTop: 8,
  },
  routeTrack: {
    width: 24,
    alignItems: 'center',
    paddingVertical: 18,
    marginRight: 8,
  },
  routeTrackStart: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#0053DB',
  },
  routeTrackLine: {
    width: 2,
    flex: 1,
    backgroundColor: '#D9E4EA',
    marginVertical: 4,
  },
  routeTrackEnd: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#9F403D',
  },
  routeInputs: {
    flex: 1,
    justifyContent: 'space-between',
  },
  routeInput: {
    marginBottom: 12,
    height: 48,
  },
  rateTotalSection: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    marginBottom: 20,
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
  rateInputWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  currencyIcon: {
    fontSize: 16,
    fontWeight: '600',
    color: '#6B7280',
    marginRight: 4,
  },
  rateInput: {
    fontSize: 22,
    fontWeight: '700',
    color: '#2A3439',
    flex: 1,
    height: 32,
    padding: 0,
  },
  totalAmount: {
    fontSize: 24,
    fontWeight: '900',
    color: '#2A3439',
    marginTop: 4,
  },
  addExpenseBtn: {
    marginTop: 8,
    paddingVertical: 8,
  },
  addExpenseText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#0053DB',
  },
  textAreaContainer: {
    height: 80,
    alignItems: 'flex-start',
    paddingTop: 12,
  },
  textArea: {
    fontSize: 14,
    fontWeight: '500',
    color: '#2A3439',
    textAlignVertical: 'top',
    height: '100%',
    width: '100%',
  },
  fabContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: Platform.OS === 'ios' ? 34 : 24,
    backgroundColor: 'transparent',
  },
  fab: {
    backgroundColor: '#0053DB',
    height: 64,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    ...Platform.select({
      ios: {
        shadowColor: '#0053DB',
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.25,
        shadowRadius: 24,
      },
      android: {
        elevation: 8,
      },
    }),
  },
  fabText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
    letterSpacing: 0.4,
  },
});

export default Dashboard;
