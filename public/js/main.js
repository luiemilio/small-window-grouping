//event listeners.
document.addEventListener('DOMContentLoaded', () => {
	if (typeof fin != 'undefined') {
		fin.desktop.main(onMain);
	} else {
		ofVersion.innerText =
			'OpenFin is not available - you are probably running in a browser.';
	}
});

//once the DOM has loaded and the OpenFin API is ready
function onMain() {
	//get a reference to the current Application.
	const mainApp = fin.desktop.Application.getCurrent();
	const mainWin = mainApp.getWindow();

	let ctr = 0;

	const gApp1 = new fin.desktop.Application({
			url: "http://localhost:5555/blank1.html",
			uuid: "test_app: " + ctr++,
			name: "test_app",
			mainWindowOptions: {
				autoShow: true,
				smallWindow: true,
				defaultHeight: 30,
				defaultWidth: 100,
				defaultLeft: 105,
				defaultTop: 65,
				frame: false,
				saveWindowState: false
			}
		},
		() => {
			gApp1.run((() => {
				const gWin1 = gApp1.getWindow();
				gWin1.joinGroup(mainWin);
			}));
		}
	);

	const gApp2 = new fin.desktop.Application({
			url: "http://localhost:5555/blank2.html",
			uuid: "test_app: " + ctr++,
			name: "test_app",
			mainWindowOptions: {
				autoShow: true,
				smallWindow: true,
				defaultHeight: 30,
				defaultWidth: 100,
				defaultLeft: 205,
				defaultTop: 65,
				frame: false,
				saveWindowState: false
			}
		},
		() => {
			gApp2.run(() => {
				const gWin2 = gApp2.getWindow();
				gWin2.joinGroup(mainWin);
			});
		}
	);

	const gApp3 = new fin.desktop.Application({
			url: "http://localhost:5555/blank3.html",
			uuid: "test_app: " + ctr++,
			name: "test_app",
			mainWindowOptions: {
				autoShow: true,
				smallWindow: true,
				defaultHeight: 30,
				defaultWidth: 100,
				defaultLeft: 305,
				defaultTop: 65,
				frame: false,
				saveWindowState: false
			}
		},
		() => {
			gApp3.run(() => {
				const gWin3 = gApp3.getWindow();
				gWin3.joinGroup(mainWin);
			});
		}
	);

	mainApp.addEventListener('window-closed', () => {
		gApp1.terminate();
	});


}