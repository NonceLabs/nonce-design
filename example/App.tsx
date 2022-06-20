import Nonce, { Layout } from 'nonce-design'
import { ScrollView, StyleSheet } from 'react-native'
import { useState } from 'react'
import { GitHub, HistoricShieldAlt, User } from 'iconoir-react-native'

console.log('', Nonce, Layout)

export default function App() {
  const [checked, setChecked] = useState<string[]>([])
  const [radio, setRadio] = useState<string | undefined>()
  return (
    // <Layout themeColor="light">
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      {/* <Heading>SettingBlock</Heading>
        <Box full>
          <SettingBlock
            title="Settings"
            items={[
              {
                icon: <User width={24} height={24} color="black" />,
                title: 'Profile',
                value: 'John Doe',
                onPress: () => {},
              },
              {
                icon: <GitHub width={24} height={24} color="black" />,
                title: 'Github',
                value: '',
                onPress: () => {},
              },
              {
                icon: (
                  <HistoricShieldAlt width={24} height={24} color="black" />
                ),
                title: 'Security',
                value: '',
                onPress: () => {},
              },
            ]}
          />
        </Box>

        <View style={styles.divider} />
        <Heading>AnimatedInput</Heading>
        <Box full pad="small">
          <Input placeholder="Name" border />
        </Box>

        <View style={styles.divider} />
        <Heading>RadioGroup</Heading>
        <RadioGroup
          options={['Maui', 'Kauai', 'Oahu']}
          labelExtractor={(t) => t}
          keyExtractor={(t) => t}
          value={radio}
          onChange={(option) => {
            setRadio(option)
          }}
        />

        <View style={styles.divider} />
        <Heading>CheckGroup</Heading>
        <CheckBoxGroup
          options={['Maui', 'Kauai', 'Oahu']}
          labelExtractor={(t) => t}
          keyExtractor={(t) => t}
          value={checked}
          onChange={(options) => {
            setChecked(options)
          }}
        />

        <View style={styles.divider} />
        <Heading>Box</Heading>

        <View style={styles.divider} />
        <Heading>Heading</Heading>
        <Heading>Heading default</Heading>
        <Heading level={2}>Heading level 2</Heading>
        <Heading level={3}>Heading level 3</Heading>
        <Heading level={4}>Heading level 4</Heading>

        <View style={styles.divider} />
        <Heading>Button</Heading>
        <Box direction="column" gap="medium" full>
          <Button label="Default" onPress={() => {}} />
          <Button label="Primary" primary onPress={() => {}} />
          <Button label="Disabled" primary disabled onPress={() => {}} />
          <Button label="Small" size="small" primary onPress={() => {}} />
          <Button label="Medium" size="medium" primary onPress={() => {}} />
          <Button label="Large" size="large" primary onPress={() => {}} />
          <Button label="Full" full primary onPress={() => {}} />
        </Box>

        <View style={styles.divider} />
        <Heading>Toast</Heading>
        <Box direction="column" gap="medium">
          <Button
            label="Info toast"
            onPress={() => {
              Toast.info('Info')
            }}
          />
          <Button
            label="Warning toast"
            onPress={() => {
              Toast.warning('Warning')
            }}
          />
          <Button
            label="Error toast"
            onPress={() => {
              Toast.error('Error')
            }}
          />
          <Button
            label="Success toast"
            onPress={() => {
              Toast.success('Success')
            }}
          />
        </Box> */}
    </ScrollView>
    // </Layout>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e3e3e3',
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    paddingTop: 50,
  },
  divider: {
    width: '100%',
    height: 2,
    backgroundColor: 'green',
    marginVertical: 10,
    opacity: 0.5,
  },
})
