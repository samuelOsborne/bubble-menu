export function BubbleMenu() {
    document.addEventListener('DOMContentLoaded', () => {
        const contextMenuLeft = document.getElementById('context-menu-l');
        const contextMenuRight = document.getElementById('context-menu-r');
        const target = document.getElementById('app');

        if (target && contextMenuLeft && contextMenuRight) {
            target.addEventListener('contextmenu', (event) => {
                event.preventDefault();

                const mouseEvent = event as MouseEvent;
                
                contextMenuLeft.style.display = 'block';

                // 110 is the margin-left of the right panel
                let CMRML = 35;
                contextMenuLeft.style.left = `${mouseEvent.pageX - contextMenuLeft.clientWidth - CMRML}px`;
                contextMenuLeft.style.top = `${mouseEvent.pageY - contextMenuLeft.clientHeight/2}px`;

                contextMenuRight.style.display = 'block';
                contextMenuRight.style.left = `${mouseEvent.pageX + contextMenuRight.clientWidth}px`;
                contextMenuRight.style.top = `${mouseEvent.pageY - contextMenuRight.clientHeight/2}px`;


            })

            // Hide menu when clicking outside
            document.addEventListener('click', (e) => {
                contextMenuLeft.style.display = 'none';
                contextMenuRight.style.display = 'none';
            });
        }
    });
}