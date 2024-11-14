import {
    SkillTreeGroup,
    SkillTree,
    SkillProvider,
  } from 'beautiful-skill-tree';
  
  const SkillTreeCust = () => {
    const data = [
        {
          id: 'hello-world',
          title: 'Hello World',
          tooltip: {
            content:
              'This node is the top most level, and will be unlocked, and ready to be clicked.',
          },
          children: [
            {
              id: 'hello-sun',
              title: 'Hello Sun',
              tooltip: {
                content:
                  'This is a parent of the top node, and will locked while the parent isn’t in a selected state.',
              },
              children: [],
            },
            {
              id: 'hello-stars',
              title: 'Hello Stars',
              tooltip: {
                content:
                  'This is the child of ‘Hello World and the sibling of ‘Hello Sun’. Notice how the app takes care of the layout automatically? That’s why this is called Beautiful Skill Tree and not just ‘Skill Tree’. (Also the npm namespace had already been taken for the latter so (flick hair emoji).',
              },
              children: [],
            },
            {
              id: 'hello-sun4',
              title: 'Hello Sun',
              tooltip: {
                content:
                  'This is a parent of the top node, and will locked while the parent isn’t in a selected state.',
              },
              children: [],
            },
            {
              id: 'hello-sun3',
              title: 'Hello Sun',
              tooltip: {
                content:
                  'This is a parent of the top node, and will locked while the parent isn’t in a selected state.',
              },
              children: [],
            },
            {
              id: 'hello-sun2',
              title: 'Hello Sun',
              tooltip: {
                content:
                  'This is a parent of the top node, and will locked while the parent isn’t in a selected state.',
              },
              children: [],
            },
          ],
        },
      ];
  
  return(
    <div className="flex justify-center w-100">
        <SkillProvider>
            <SkillTreeGroup theme={{
          headingFont: 'arial',
          nodeDesktopFontSize: '20px',
          headingFontSize: '20px',
          headingFontColor: '#FFFFFE',
          nodeDesktopTextNodeWidth: '200px',
          treeBackgroundColor: '',
          nodeAlternativeActiveBackgroundColor: 'green',
          nodeAlternativeFontColor: '#FFFFFF',
          nodeAltenativeActiveFontColor: 'FFFFFE',
          // backgroundColor: 'black',
        }}>
            {({ skillCount }) => (
            <SkillTree
                treeId="first-tree"
                title="Skill Tree"
                data={data}
                // collapsible
                description="My first skill tree"
            />
            )}
            </SkillTreeGroup>
        </SkillProvider>
    </div>  
);
};



export default SkillTreeCust;