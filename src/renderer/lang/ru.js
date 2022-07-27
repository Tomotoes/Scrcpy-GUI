export default {
	footer: {
		powerBy: 'Сделан ',
		author: 'Author'
	},
	dashboard: {
		configuration: 'Конфигурация',
		management: 'Управление'
	},
	configuration: {
		source: {
			label: 'Scrcpy',
			placeholder: 'Scrcpy путь к папке - например: C:\\scrcpy-win64',
			tooltip: 'If not set, please configure the scrcpy folder path to an environment variable'
		},
		title: {
			label: 'заголовок окна',
			placeholder: 'По умолчанию используется модель устройства.',
		},
		record: {
			label: 'запись экрана',
			tip: 'При включении зеркало будет записано;  при закрытии записанный видеофайл будет сгенерирован по указанному пути.',
			filepath: 'Путь файла',
			tooltip: 'Путь включает имя видео, а формат видео -.mkv',
			mirror: 'Открытое зеркало во время записи'
		},
		bitRate: {
			label: 'битрейт',
			popover: '8 - битрейт по умолчанию'
		},
		maxSize: {
			label: 'максимальный размер',
			popover: '0 - значение по умолчанию'
		},
		maxFps: {
			label: 'макс fps',
			popover: '0 - значение по умолчанию'
		},
		orientation: {
			label: 'угол поворота',
			popover: '0 ° - значение по умолчанию'
		},
		window: {
			label: 'инициализация',
			x: {
				title: 'Положение оси абсцисс зеркала',
				content: 'Если абсцисса и ордината равны 0, он откроется в позиции по умолчанию.'
			},
			y: {
				title: 'Положение зеркала по ординате',
				content: 'Если абсцисса и ордината равны 0, он откроется в позиции по умолчанию.'
			},
			height: {
				title: 'Высота зеркала',
				content: 'Если ширина и высота равны 0, отображается размер по умолчанию.'
			},
			width: {
				title: 'Ширина зеркала',
				content: 'Если ширина и высота равны 0, отображается размер по умолчанию.'
			},
		},
		crop: {
			label: 'вырезать экран',
			x: 'Абсцисса позиции разреза',
			y: 'Ордината положения разреза',
			height: {
				title: 'Высота в разрезанном размере',
				content: 'Если высота и ширина равны 0, то он не будет обрезан.'
			},
			width: {
				title: 'Ширина обрезки по размеру',
				content: 'Если высота и ширина равны 0, то он не будет обрезан.'
			},
		},
		other: {
			label: 'другие настройки',
			fixed: 'Окно всегда наверху',
			control: 'Компьютерное управление',
			fullscreen: 'Показать в полноэкранном режиме',
			border: 'Показать границу окна',
			touch: 'Показать местоположение касания телефона',
			render: 'Рендеринг всех кадров',
			screen: 'Выключить экран телефона',
			awake: {
				tooltip: 'Перед выключением экрана блокировки необходимо открыть параметр управления компьютером.',
				content: 'Выключить экран блокировки'
			},
			auto: 'Автоматически включать подключенные устройства',
			hidden: {
				tooltip: 'Для вступления в силу необходимо перезапустить приложение',
				content: 'Скрыть в системной панели после выхода'
			}
		},
		button: {
			save: 'Сохранить конфигурацию',
			default: 'Сброс настроек'
		},
		notify: {
			saveSuccess: 'Конфигурация успешно сохранена!'
		}
	},
	management: {
		ip: {
			tip: 'IP-адрес устройства в локальной сети',
			remove: 'Удалить',
			connect: 'Включите беспроводное соединение'
		},
		devices: {
			name: 'название',
			edit: 'Нажмите, чтобы редактировать',
			method: {
				label: 'метод',
				wired: 'проводной',
				wireless: 'беспроводной'
			},
			operation: 'операция',
			disconnect: 'Отключить'
		},
		button: {
			open: 'Открыть выбранное зеркало'
		},
		whenEmpty: 'Нет подключения к устройству',
		notify: {
			firstLoad: 'Загрузка устройства ...',
			reduceDevices: 'Смена оборудования',
			newDevices: 'Обнаружено новое устройство',
			open: '{name} был успешно открыт'
		},
		open: {
			loading: 'Открываю зеркало, пожалуйста, подождите ...',
			success: '{name} был закрыт нормально',
			error: `{name} не смог начать.  Пожалуйста, внимательно проверьте документацию:
			<p>1. Правильно ли настроен scrcpy</p>
			<p>2. Открывает ли телефон опцию отладки</p>
			<p>3. Установлено ли программное обеспечение scrcpy-gui для запуска администратором</p>
			<p>4. Может ли командная строка scrcpy открыть устройство</p>
			<p>5. Запустить \`adb-устройства\` команда, чтобы увидеть, появляется ли устройство</p>
			Если указанная выше конфигурация нормальная, перейдите на Github, чтобы сообщить о проблеме, и я решу ее как можно скорее.`
		},
		connect: {
			error: {
				ip: 'Пожалуйста, введите правильный IP-адрес',
				exist: '{name} был подключен'
			},
			loading: 'Открытие беспроводного подключения ...',
			success: 'Беспроводное соединение включено',
			fail: 'Не удалось открыть беспроводное соединение'
		},
		disconnect: {
			success: '{name} уже отключен'
		},
		error: {
			'unknownScrcpyPathException': 'Путь к папке Scrcpy настроен неправильно.  Убедитесь, что в этой папке существует `scrcpy.exe`'
		}
	},
	titleBar: {
		document: 'Документ',
		checkForUpdates: 'Обновить',
		feedback: 'Обратная связь',
		switchLanguage: 'Языки',
		about: 'Около'
	},
	tray: {
		hide: 'Спрятать',
		exit: 'Выход'
	}
}